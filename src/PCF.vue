<template>
  <div class="fumen-list">
    <div class="fumen-item">
      <VTetrisField
        :allow_edit="true"
        :page="initial_page"
        @field_change="update_field"
        :height="10"
      ></VTetrisField>
    </div>
  </div>
  <div class="fumen-ctl">
    <TButton @click="solve_pc">Solve</TButton>
    <input v-model="sequence" v-on:keyup.enter="solve_pc" />
  </div>
  <div v-if="pc_fumen !== empty">
    <!-- <TFumenPlayer :fumen="pc_fumen" :height="10" :page="0" :display_copy="false" /> -->
    <TFumenList :fumen="pc_fumen" :height="10" :display_copy="false" />
  </div>
</template>
<script setup lang="ts">
import { decoder, Page } from "tetris-fumen";
import { computed, ref } from "vue";
import { get_pc } from "./pcf"
import VTetrisField from "./VTetrisField.vue";
import TFumenPlayer from "./TFumenPlayer.vue"
import TButton from "./TButton.vue"
import TFumenList from "./TFumenList.vue"

const props = withDefaults(defineProps<{
  initial_field_fumen?: string,
  sequence?: string
}>(), { initial_field_fumen: "v115@9gD8DeF8CeG8BeH8CeC8JeAgH", sequence: "ITSZ" })

const initial_page = computed(() => decoder.decode(props.initial_field_fumen)[0])
const empty = "v115@vhAAgH"
const binary_field = ref<bigint>(BigInt(0))
const pc_fumen = ref<string>(empty)
const sequence = ref<string>(props.sequence)
function update_field(field: bigint) {
  binary_field.value = field
}
async function solve_pc() {
  let res = (await get_pc())(binary_field.value, sequence.value.toUpperCase())
  if (res == "v115@") {
    res = empty
  }
  pc_fumen.value = res
  // console.log(pc_fumen.value)
}
</script>
<style scoped>
.fumen-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.fumen-ctl {
  display: flex;
  align-items: center;
}
.fumen-item {
  width: 160px;
}
.fumen-item .vt-field {
  width: 100%;
}
</style>
