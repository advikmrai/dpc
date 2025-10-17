---
title: DPC
---

# DPC

<div class="setups-container">

## Extra O

<TDPC name="O -> J" v-bind="extra_O.O2J" />
<TDPC name="J -> O" v-bind="extra_O.J2O" />


## Extra T

<TDPC name="Extra T" v-bind="extra_T.ALL" />

## Extra S

<TDPC name="S -> O" v-bind="extra_S.S2O" />
<TDPC name="O -> S" v-bind="extra_S.O2S" />

## Extra Z

<TDPC name="Z -> O" v-bind="extra_Z.Z2O" />
<TDPC name="O -> Z" v-bind="extra_Z.O2Z" />

## Extra I

<TDPC name="I -> L -> O" v-bind="extra_I.I2L2O" />
<TDPC name="O -> L" v-bind="extra_I.O2L" />
<TDPC name="L -> I" v-bind="extra_I.L2I" />

## Extra J

<TDPC name="OJ and ZS" v-bind="extra_J.OJZS" />
<TDPC name="OJ and SZ" v-bind="extra_J.OJSZ" />
<TDPC name="JO" v-bind="extra_J.JO" />

## Extra L

<TDPC name="OL and SZ" v-bind="extra_L.OLSZ" />
<TDPC name="OL and ZS" v-bind="extra_L.OLZS" />
<TDPC name="LO" v-bind="extra_L.LO" />

</div>

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
.setups-container {
    display: flex;
    flex-wrap: wrap;
}
.setups-container h2 {
    width: 100%;
}
</style>
