---
title: PC Finder
---
# PC Finder 
## Solve Your Own

<label>
  Fumen:
  <input v-model="fumen" style="border: 1px solid #ccc;">
</label>

<PCF :initial_field_fumen="fumen"/>

## PCO
<PCF/>

## ILSZ

<PCF initial_field_fumen="v115@9gD8FeC8GeE8EeD8PeAgH" sequence="TOIZLJS"/>

## Credits

Content of this page comes from:

- https://github.com/MinusKelvin/pcf


<script setup>
import TDPC from "../src/TDPC.vue";
import PCF from "../src/PCF.vue"
import { ref, watch, computed } from "vue"
let fumen = ref()
</script>
