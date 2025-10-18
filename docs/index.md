---
title: DPC
---

# DPC

<div class="setups-container">

## Extra O

<TDPC name="KURUMA" v-bind="extra_O.O2J" />
<TDPC name="TSD DPC" v-bind="extra_O.J2O" />

## Extra S

<TDPC name="LIME" v-bind="extra_S.S2O" />
<TDPC name="KURUMA" v-bind="extra_S.O2S" />

## Extra I

<TDPC name="I -> L -> O" v-bind="extra_I.I2L2O" />
<TDPC name="O -> L" v-bind="extra_I.O2L" />
<TDPC name="L -> I" v-bind="extra_I.L2I" />

## Extra T

<TDPC name="MKO" v-bind="extra_T.MKO" />
<TDPC name="UPSIDEDOWN SPC" v-bind="extra_T.UPSIDEDOWN" />
<TDPC name="FULL COVER" v-bind="extra_T.ALL" />
<TDPC name="ELEPHANT" v-bind="extra_T.ELEPHANT" />

## Extra J

<TDPC name="OJ and ZS" v-bind="extra_J.OJZS" />
<TDPC name="OJ and SZ" v-bind="extra_J.OJSZ" />
<TDPC name="JO" v-bind="extra_J.JO" />

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
