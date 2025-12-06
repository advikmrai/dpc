<template>
  <div class="field-div">
    <canvas class="vt-field" ref="canvas" @mousedown="handleMouseDown" @mousemove="handleMouseMove"
      @mouseup="handleMouseUp" @mouseleave="handleMouseLeave" />
    <div class="button-container">
      <button v-if="display_copy" type="button" class="action-btn copy-btn" @click="to_fumen"
        title="copy as fumen">{{
          button_name }}</button>
      <button v-if="allow_edit" type="button" class="action-btn clear-btn" @click="clearField"
        title="clear field">Clear</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, PropType, triggerRef, computed } from "vue"
import { encoder, type Field, type Page } from "tetris-fumen"

// color constants
const colors = {
  "T": ["#b451ac", "#e56add"],
  "I": ["#41afde", "#43d3ff"],
  "O": ["#f7d33e", "#fff952"],
  "L": ["#ef9535", "#ffbf60"],
  "J": ["#1983bf", "#1ba6f9"],
  "S": ["#66c65c", "#88ee86"],
  "Z": ["#ef624d", "#ff9484"],
  "X": ["#686868", "#949494"],
  "_": ["#686868", "#949494"],
}

const mirrored_colors = {
  "T": ["#b451ac", "#e56add"],
  "I": ["#41afde", "#43d3ff"],
  "O": ["#f7d33e", "#fff952"],
  "J": ["#ef9535", "#ffbf60"],
  "L": ["#1983bf", "#1ba6f9"],
  "Z": ["#66c65c", "#88ee86"],
  "S": ["#ef624d", "#ff9484"],
  "X": ["#686868", "#949494"],
  "_": ["#686868", "#949494"],
}

const button_name = ref('Copy')

function get_color() {
  return props.mirror ? mirrored_colors : colors
}

async function to_fumen() {
  const page: Page = props.page as Page
  const fumen_string = encoder.encode([{
    field: page.field,
    comment: page.comment
  }])
  navigator.clipboard.writeText(fumen_string)
  button_name.value = "Done"
  setTimeout(() => {
    button_name.value = "Copy"
  }, 1000)
}

const props = defineProps({
  page: { type: Object, default: null },
  height: { type: Number, default: 20 },
  cell_size: { type: Number, default: 20 },
  mirror: { type: Boolean, default: false },
  allow_edit: { type: Boolean, default: false },
  display_copy: { type: Boolean, default: true }
})

const emit = defineEmits<{
  (e: 'field_change', field: bigint): void
}>()

let page = ref<Page>(props.page as Page)
// variables
var ctx: CanvasRenderingContext2D | null = null
const canvas = ref<HTMLCanvasElement>()
// draw game field
function drawField(ctx: CanvasRenderingContext2D, page: Page) {
  const field = page.field
  const height = props.height - 1
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 10; j++) {
      let idx = props.mirror ? 9 - j : j
      var piece = field.at(idx, i)
      if (piece != "_") {
        ctx.fillStyle = get_color()[piece][0]
        ctx.fillRect(j * props.cell_size, (height - i) * props.cell_size, props.cell_size, props.cell_size)
        ctx.fillStyle = get_color()[piece][1]
        ctx.fillRect(j * props.cell_size, (height - i) * props.cell_size, props.cell_size, -props.cell_size / 5)
      }
    }
  }
  if (!page.operation) return
  const mino = page.mino()
  const pos = mino.positions()
  ctx.lineWidth = 2
  ctx.lineJoin = "round"
  ctx.strokeStyle = get_color()[mino.type][0]
  for (var i = 0; i < 4; i++) {
    ctx.strokeRect(pos[i].x * props.cell_size + props.cell_size / 10, (height - pos[i].y) * props.cell_size + props.cell_size / 10, props.cell_size * 0.8, props.cell_size * 0.8)
    // ctx.fillStyle = colors[mino.type][0] + "7f"
    // ctx.fillRect(pos[i].x * 20, (height - pos[i].y) * 20, 20, 20)
    // if (!pos.find(p => p.x == pos[i].x && p.y == pos[i].y + 1) && field.at(pos[i].x, pos[i].y + 1) == "_") {
    //   ctx.fillStyle = colors[mino.type][1] + "7f"
    //   ctx.fillRect(pos[i].x * 20, (height - pos[i].y) * 20, 20, -4)
    // }
  }
}
const binary_field = computed(() => {
  let res = BigInt(0)
  const current_field = page.value.field
  for (var i = 0; i < props.height; i++) {
    for (var j = 0; j < 10; j++) {
      let source_j = props.mirror ? 9 - j : j
      var piece = current_field.at(source_j, i)
      const shift_amount = BigInt(i * 10 + j)
      if (piece != "_") {
        // console.log(i, j, shift_amount)
        res += (BigInt(1) << shift_amount)
      }
    }
  }
  // console.log(res.toString(2))
  return res
})

function clearField() {
  const new_page: Page = Object.assign(Object.create(Object.getPrototypeOf(page.value)), page.value)
  let new_field = new_page.field.copy()
  for (let y = 0; y < props.height; y++) {
    for (let x = 0; x < 10; x++) {
      new_field.set(x, y, "_")
    }
  }
  new_page.field = new_field
  page.value = new_page
  if (props.allow_edit) {
    emit('field_change', binary_field.value)
  }
}


const isDrawing = ref(false)
const lastCell = ref({ x: -1, y: -1 })
const drawMode = ref('')

function handleMouseDown(event: MouseEvent) {
  if (!props.allow_edit) return
  isDrawing.value = true
  const { realX, realY } = getMousePosition(event)
  const target_x = props.mirror ? 9 - realX : realX
  const currentValue = page.value.field.at(target_x, realY)
  drawMode.value = currentValue === '_' ? 'X' : '_'
  setCell(realX, realY, drawMode.value)
  lastCell.value = { x: realX, y: realY }
}

function handleMouseMove(event: MouseEvent) {
  if (!props.allow_edit || !isDrawing.value) return
  const { realX, realY } = getMousePosition(event)
  if (realX !== lastCell.value.x || realY !== lastCell.value.y) {
    setCell(realX, realY, drawMode.value)
    lastCell.value = { x: realX, y: realY }
  }
}

function handleMouseUp() {
  isDrawing.value = false
}

function handleMouseLeave() {
  isDrawing.value = false
}

function getMousePosition(event: MouseEvent) {
  if (!canvas.value) return { realX: -1, realY: -1 }
  const rect = canvas.value.getBoundingClientRect()
  const scaleX = canvas.value.width / rect.width
  const scaleY = canvas.value.height / rect.height
  const realX = Math.floor((event.clientX - rect.left) * scaleX / props.cell_size)
  const realY = props.height - 1 - Math.floor((event.clientY - rect.top) * scaleY / props.cell_size)
  return { realX, realY }
}

function setCell(x: number, y: number, value: string) {
  const new_page: Page = Object.assign(Object.create(Object.getPrototypeOf(page.value)), page.value)
  let new_field = new_page.field.copy()
  const target_x = props.mirror ? 9 - x : x
  new_field.set(target_x, y, value)
  new_page.field = new_field
  page.value = new_page
  if (props.allow_edit) {
    emit('field_change', binary_field.value)
  }
}

onMounted(() => {
  if (!canvas.value) return
  canvas.value.width = 10 * props.cell_size
  canvas.value.height = props.height * props.cell_size
  ctx = canvas.value.getContext("2d")
  if (!ctx) return
  drawField(ctx, page.value as Page)
  if (props.allow_edit) {
    emit('field_change', binary_field.value)
  }
})
watch(() => props.page, (newPage) => {
  page.value = newPage as Page
  if (props.allow_edit) {
    emit('field_change', binary_field.value)
  }
})
watch(page, () => {
  if (!ctx) return
  ctx.canvas.height = props.height * props.cell_size
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawField(ctx, page.value as Page)
})

watch(() => props.mirror, () => {
  if (!ctx) return
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawField(ctx, page.value as Page)
  if (props.allow_edit) {
    emit('field_change', binary_field.value)
  }
})
</script>

<style>
.vt-field {
  image-rendering: pixelated;
}
.button-container {
  position: absolute;
  top: 0;
  right: 4px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  visibility: hidden;
}

.field-div:hover .button-container {
  visibility: visible;
}

.action-btn {
  padding: 1.6px 8px;
  color: black;
  background-color: rgb(218, 218, 231);
  border: 0 solid;
  border-radius: 0px 0px 4px 4px;
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  cursor: pointer;
}

.action-btn:hover {
  background-color: rgb(163, 163, 172);
}

.copy-btn {
  z-index: 99;
}

.clear-btn {
  z-index: 98;
}
.field-div {
  isolation: isolate;
  position: relative;
}

.vt-field {
  background-color: transparent;
  border-radius: 4px;
  width: 100%;
}
</style>
