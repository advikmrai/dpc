<template>
  <div class="field-div">
    <canvas class="vt-field" ref="canvas" @click="edit_field" />
    <button
      v-if="display_copy"
      type="button"
      class="copy-btn"
      @click="to_tech"
      title="copy as techmino field"
    >{{ button_name }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, PropType, triggerRef, computed } from "vue"
import type { Field, Page } from "tetris-fumen"
import { to_techmino_field } from "./fumen"
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

async function to_tech() {
  const res = await to_techmino_field((props.page as Page).field)
  console.log("export field:", res)
  navigator.clipboard.writeText(res)
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
  display_copy: {type: Boolean, default: true}
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
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 10; j++) {
      var piece = current_field.at(j, i)
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

function edit_field(p: any) {
  if (!props.allow_edit) {
    return
  }
  if (!canvas.value) {
    return
  }
  const real_cell_size = canvas.value.offsetHeight / props.height
  const realX = Math.floor(p.offsetX / real_cell_size)
  const realY = props.height - 1 - Math.floor(p.offsetY / real_cell_size)
  const current = page.value.field.at(realX, realY)
  const new_page: Page = Object.assign(Object.create(Object.getPrototypeOf(page.value)), page.value)
  let new_field = new_page.field.copy()
  if (current === '_') {
    new_field.set(realX, realY, "X")
  } else {
    new_field.set(realX, realY, "_")
  }
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
watch(props, () => {
  page.value = props.page as Page
})
watch(page, () => {
  if (!ctx) return
  ctx.canvas.height = props.height * props.cell_size
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  drawField(ctx, page.value as Page)
})
</script>

<style>
.vt-field {
  image-rendering: pixelated;
}
.copy-btn {
  padding: 1.6px 8px;
  color: black;
  background-color: rgb(218, 218, 231);
  border-color: #f3f3ed;
  position: absolute;
  top: 0px;
  z-index: 99;
  right: 4px;
  border-radius: 0px 0px 4px 4px;
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  border: 0 solid;
  cursor: pointer;
}
.copy-btn:hover {
  background-color: rgb(163, 163, 172);
}
.field-div {
  isolation: isolate;
  position: relative;
}
.vt-field {
  background-color: #f3f3ed;
  border-radius: 4px;
}
</style>
