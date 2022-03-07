<template>
  <TFumenList
    :fumen="props.build_fumen"
    :height="7"
    :cell_size="18"
    :mirror="props.mirror"
  />
  <PCF :initial_field_fumen="props.field_fumen" sequence="ITSZOLJ"/>
  <TFumenList :fumen="props.solutions_fumen" :height="6" :cell_size="18" :mirror="props.mirror" :display_copy="false"/>
</template>
<script setup lang="ts">
import TFumenList from "./TFumenList.vue"
import PCF from "../src/PCF.vue"
import { merge_pages } from "./fumen"
const props = withDefaults(defineProps<{
  build_fumen: string,
  field_fumen: string,
  solutions_fumen: string,
  mirror?: boolean,
}>(), { mirror: false })
</script>
