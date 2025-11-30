---
title: PC Finder
---
# PC Finder 
## Solve Your Own

<label>
  Fumen:
  <input v-model="fumen" style="border: 1px solid #ccc;">
</label>

<PCF :initial_field_fumen="fumen" :mirror="is_mirrored" />

## PCO
<PCF :mirror="is_mirrored" />

## ILSZ

<PCF initial_field_fumen="v115@9gD8FeC8GeE8EeD8PeAgH" sequence="TOIZLJS" :mirror="is_mirrored" />

## 2nd

### IOSZ type

<PCF initial_field_fumen="v115@KhA8FeF8DeE8OeAgH" sequence="IOTZLJSI" :mirror="is_mirrored" />

### ITSZ type


<PCF initial_field_fumen="v115@9gA8IeA8GeA8AeA8EeE8FeC8JeAgH" sequence="TOTZLJSI" :mirror="is_mirrored" />


## Credits

Content of this page comes from:

- https://github.com/MinusKelvin/pcf


<script setup>
import TDPC from "../src/TDPC.vue";
import PCF from "../src/PCF.vue"
import { ref, watch, computed } from "vue"
import { is_mirrored } from "../src/store";
let fumen = ref()
</script>