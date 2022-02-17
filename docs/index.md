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

## Extra I

### I -> L -> O
<TDPC v-bind="extra_I.I2L2O" />

### O -> L
<TDPC v-bind="extra_I.O2L" />

### L -> I 
<TDPC v-bind="extra_I.L2I" />

## Extra L

## Credits

Content of this page comes from:

- https://github.com/flaribbit/v-tetris-field
- http://tetris.johnbeak.cz/dpc/builds.php
- https://four.lol/perfect-clears/dpc

<!-- end -->

<script setup>
import TDPC from "../src/TDPC.vue";
import { extra_O, extra_T, extra_S, extra_Z, extra_I } from "../src/data";
</script>

<style>
.container {
  max-width: 90vw !important;
}
.vt-field {
  background-color: #f3f3ed;
  border-radius: 4px;
}
@media (min-width: 320px) {
  .fumen-item {
    width: calc(50% - 4px);
  }
  .fumen-item .vt-field {
    width: 100%;
  }
}
@media (min-width: 425px) {
  .fumen-item {
    width: calc(33% - 8px);
  }
  .fumen-item .vt-field {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .fumen-item {
    width: calc(25% - 16px);
  }
  .fumen-item .vt-field {
    width: 100%;
  }
}
@media (min-width: 1440px) {
  .fumen-item {
    width: calc(20% - 32px);
  }
  .fumen-item .vt-field {
    width: 100%;
  }
}
@media (min-width: 2560px) {
  .fumen-item {
    width: calc(14% - 32px);
  }
  .fumen-item .vt-field {
    width: 100%;
  }
}
</style>
