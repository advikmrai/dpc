---
title: DPC
---

## Extra O

### O -> J

<TDPC v-bind="extra_O.O2J" />

### J -> O

<TDPC v-bind="extra_O.J2O" />


## Extra T

<TDPC v-bind="extra_T.ALL" />

## Extra S

### S -> O

<TDPC v-bind="extra_S.S2O" />

### O -> S

<TDPC v-bind="extra_S.O2S" />

## Extra Z

### Z -> O

<TDPC v-bind="extra_Z.Z2O" />

### O -> Z

<TDPC v-bind="extra_Z.O2Z" />

## Credits

Content of this page comes from:

- https://github.com/flaribbit/v-tetris-field
- http://tetris.johnbeak.cz/dpc/builds.php
- https://four.lol/perfect-clears/dpc

<!-- end -->

<script setup>
import TDPC from "../src/TDPC.vue";
import { extra_O, extra_T, extra_S, extra_Z } from "../src/data";
</script>

<style>
.container {
  max-width: 50em !important;
}
@media (max-width: 420px) {
  .fumen-item {
    width: calc(50% - 4px);
  }
  .fumen-item .vt-field {
    width: 100%;
  }
}
</style>
