---
title: DPC
---

# DPC

<div class="setups-container">

## Extra O

<TDPC name="KURUMA" v-bind="extra_O.O2J" />
<TDPC name="TSD DPC" v-bind="extra_O.J2O" />
<TDPC name="TKI SHIFTED" v-bind="extra_O.TKISHIFT" />
<TDPC name="ALBY" v-bind="extra_O.ALBY" />
<TDPC name="1-TILE FALLBACK" v-bind="extra_O.FALLBACK" />
<TDPC name="TS&TET" v-bind="extra_O.TSTET" />
<TDPC name="2L PC into 7th" v-bind="extra_O.TWOL" />

## Extra S

<TDPC name="KURUMA" v-bind="extra_S.O2S" />
<TDPC name="HOLD O" v-bind="extra_S.HOLDO" />
<TDPC name="SLED" v-bind="extra_S.SLED" />
<TDPC name="ELEPHANT SHIFTED" v-bind="extra_S.ELPTSHIFTED" />
<TDPC name="BUTTER" v-bind="extra_S.BUTTER" />
<TDPC name="THE OTHER BUTTER" v-bind="extra_S.OTHERBUTTER" />
<TDPC name="LIME" v-bind="extra_S.S2O" />
<TDPC name="BROKEN SLED" v-bind="extra_S.XSLED" />

## Extra I

<TDPC name="TKI DPC" v-bind="extra_I.I2L2O" />
<TDPC name="BUTTER" v-bind="extra_I.BUTTER" />
<TDPC name="DECENT VARIANT" v-bind="extra_I.DECENT" />
<TDPC name="BIG L" v-bind="extra_I.BIGL" />

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

Many thanks to Enter-tainer for the existence of their dpc site

- https://github.com/Enter-tainer/dpc
- https://github.com/flaribbit/v-tetris-field

<!-- end -->

<script setup>
import TDPC from "../src/TDPC.vue";
import { extra_O, extra_T, extra_S, extra_Z, extra_I, extra_J, extra_L } from "../src/data";
</script>

<style>

.fumen-item {
  width: 180px;
}
.setups-container {
    display: flex;
    flex-wrap: wrap;
}
.setups-container h2 {
    width: 100%;
}
</style>
