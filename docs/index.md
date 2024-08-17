---
title: DPC
---

# DPC

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

## Extra J

### OJ and ZS
<TDPC v-bind="extra_J.OJZS" />

### OJ and SZ
<TDPC v-bind="extra_J.OJSZ" />

### JO
<TDPC v-bind="extra_J.JO" />

## Extra L

### OL and SZ
<TDPC v-bind="extra_L.OLSZ" />

### OL and ZS
<TDPC v-bind="extra_L.OLZS" />

### LO
<TDPC v-bind="extra_L.LO" />

## Credits

Content of this page comes from:

- https://github.com/flaribbit/v-tetris-field
- http://tetris.johnbeak.cz/dpc/builds.php
- https://four.lol/perfect-clears/dpc

<!-- end -->

<script setup>
import TDPC from "../src/TDPC.vue";
import { extra_O, extra_T, extra_S, extra_Z, extra_I, extra_J, extra_L } from "../src/data";
</script>

<style>
.container {
  max-width: 90vw !important;
}
.fumen-item {
  width: 160px;
}

</style>
