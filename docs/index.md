---
title: DPC
---

# DPC

These setups are useful for PC looping, so you can attain results like I do:

![me on blitz](assets/me_on_blitz.gif)


## Extra O
[train](https://jstris.jezevec10.com/play/mode/2591)

<TDPC name="KURUMA" v-bind="extra_O.O2J" />
<TDPC name="TSD DPC" v-bind="extra_O.J2O" />
<TDPC name="TKI SHIFTED" v-bind="extra_O.TKISHIFT" />
<TDPC name="ALBY" v-bind="extra_O.ALBY" />
<TDPC name="1-TILE FALLBACK" v-bind="extra_O.FALLBACK" />
<TDPC name="TS&TET" v-bind="extra_O.TSTET" />
<TDPC name="2L PC into 7th" v-bind="extra_O.TWOL" />
<TDPC name="HUTCH" v-bind="extra_O.HUTCH" />
<TDPC name="CASTLELIKE" v-bind="extra_O.CASTLELIKE" />

## Extra S
[train](https://jstris.jezevec10.com/play/mode/2589)

<TDPC name="KURUMA" v-bind="extra_S.O2S" />
<TDPC name="HOLD O" v-bind="extra_S.HOLDO" />
<TDPC name="TSD" v-bind="extra_S.TSD" />
<TDPC name="ELEPHANT SHIFTED" v-bind="extra_S.ELPTSHIFTED" />
<TDPC name="ELEPHANT" v-bind="extra_S.ELEPHANT" />
<TDPC name="CUP" v-bind="extra_S.CUP" />
<TDPC name="BUTTER" v-bind="extra_S.BUTTER" />
<TDPC name="THE OTHER BUTTER" v-bind="extra_S.OTHERBUTTER" />
<TDPC name="SLED" v-bind="extra_S.SLED" />
<TDPC name="TET ELEPHANT" v-bind="extra_S.ELPT_TET" /> 
<TDPC name="LIME" v-bind="extra_S.S2O" />
<TDPC name="BROKEN SLED" v-bind="extra_S.XSLED" />
<TDPC name="ALT CUP" v-bind="extra_S.ALTCUP" />
<TDPC name="LOW TSD" v-bind="extra_S.LOWTSD" />
<TDPC name="INCLINE" v-bind="extra_S.INCLINE" />
<TDPC name="4 TILE RECOVERY" v-bind="extra_S.FTREC" />

## Extra I
[train](https://jstris.jezevec10.com/play/mode/2594)

<TDPC name="TKI DPC" v-bind="extra_I.I2L2O" />
<TDPC name="BUTTER" v-bind="extra_I.BUTTER" />
<TDPC name="T SPIN" v-bind="extra_I.TSPIN" />
<TDPC name="DECENT VARIANT" v-bind="extra_I.DECENT" />
<TDPC name="BIG L" v-bind="extra_I.BIGL" />

## Extra T
[train](https://jstris.jezevec10.com/play/mode/2593)

<TDPC name="MKO" v-bind="extra_T.MKO" />
<TDPC name="UPSIDEDOWN SPC" v-bind="extra_T.UPSIDEDOWN" />
<TDPC name="FULL COVER" v-bind="extra_T.ALL" />
<TDPC name="ELEPHANT" v-bind="extra_T.ELEPHANT" />

## Extra J

[train](https://jstris.jezevec10.com/play/mode/2592)

<TDPC name="T SPIN MINI" v-bind="extra_J.TSM" />
<TDPC name="DRAWBRIDGE" v-bind="extra_J.DRAWBRIDGE" />
<TDPC name="STSD" v-bind="extra_J.STSD" />
<TDPC name="THE BIG C" v-bind="extra_J.BIGC" />
<TDPC name="OJ and SZ" v-bind="extra_J.OJSZ" />
<TDPC name="CHILL" v-bind="extra_J.CHILL" />
<TDPC name="HOLD L SPC" v-bind="extra_J.HOLDLSPC" />
<TDPC name="EH-TRIS" v-bind="extra_J.EHTRIS" />w


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
