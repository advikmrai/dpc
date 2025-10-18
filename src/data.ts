import { merge_pages, mirror_comments, mirror_name } from "./fumen"
interface DPC {
  build_fumen: string,
  field_fumen: string,
  solutions_fumen: string,
  mirror?: boolean,
  blurb?: string,
}

function mirror_DPC(d: DPC): DPC {
  let t = { ...d }
  t.solutions_fumen = mirror_comments(t.solutions_fumen)
  t.mirror = !t.mirror
  return t
}

const extra_O = {
  "O2J": {
    build_fumen: "v115@1gAtGewhBtGewhAtCehli0whRpAeR4glRpg0whRpR4?AeglRpKeAgWaAFLDmClcJSAVDEHBEooRBPoAVBTH8LCqXBA?A",
    field_fumen: "v115@JhA8GeC8GeE8AeC8KeAgH",
    solutions_fumen: "v115@9gRphlywAtg0whRpA8glQ4wwBtg0whC8glR4Ath0wh?E8Q4C8whJeAgWUAYEoABgngHBg3CwBgtjPCaHExC9gRpBty?wR4whRpA8BtwwR4glwhC8i0ilwhE8g0C8whJeAAPUAYBIOB?gngHBg3CwBg9TPCTnjxC9gRphlBti0whRpA8glQ4Btwwg0w?hC8glR4ywwhE8Q4C8whJeAAPUA48nABgngHBg3CwBg99tCa?HUPC9gRpywzhglRpA8wwR4AtilC8R4Bti0E8AtC8g0JeAAP?UAW4nABgngHBg3CwBAfLuCMX9wC9gRpBtzhR4RpA8Btywhl?C8i0wwR4glE8g0C8glJeAAPUA1CwKBgngHBg3CwBAi/wCvH?MMC9gRpBtzhhlRpA8BtywR4C8i0wwR4glE8g0C8glJeAAPU?A1CwKBgngHBg3CwBgs/wCvX8LC9gRpBtR4zhRpA8Bth0wwh?lC8R4g0ywglE8g0C8glJeAAPUAT4f2AgngHBg3CwBACmPCv?HMMC",
    blurb: "You can get a TetPC more than 4/5ths the time, which is some insane work.",
    mirror: false,
  },
  "J2O": {
    build_fumen: "v115@0gAtHeBtGewhAtCehlRpg0whRpAeR4glRpg0whRpR4?AeglAeh0whJeAgWaAFLDmClcJSAVDEHBEooRBToAVBPeHgC?sXBAA",
    field_fumen: "v115@IhA8HeB8GeE8AeA8AeC8JeAgH",
    solutions_fumen: "v115@9gilywzhglA8RpwwAth0R4B8RpBtg0R4E8AtA8g0C8?JeAgWUAY4HOBgngHBg3CwBgsPFDP+VWC9gilzhR4AtglA8R?ph0R4BtB8Rpg0ywAtE8g0A8wwC8JeAAPUAY4f2AgngHBg3C?wBA/dgCad9VC9gilAtRpzhglA8BtRph0R4B8Atywg0R4E8w?wA8g0C8JeAAPUA2FIOBgngHBg3CwBgs/wCvn9VC9gilAtRp?whg0R4glA8BtRpwhi0B8AtywwhR4E8wwA8whC8JeAAPUAUB?IOBgngHBg3CwBg9lPCvXstC9gilywwhg0R4glA8RpwwAtwh?i0B8RpBtwhR4E8AtA8whC8JeAAPUAU4f2AgngHBg3CwBgdr?gCqOstC9gilR4Ath0RpglA8R4Btg0wwRpB8zhywE8AtA8g0?C8JeAAPUAT4f2AgngHBg3CwBAeNPCa3TWC9gilwwzhRpglA?8ywQ4BtRpB8i0R4BtE8g0A8Q4C8JeAAPUAyC4UBgngHBg3C?wBgszPCve9VC9gilQ4ywAtRpglA8g0R4wwBtRpB8i0zhE8Q?4A8AtC8JeAAPUAy/f2AgngHBg3CwBgdPFDTHWWC",
    blurb: "Good for scoring.",
    mirror: false,
  },
  "ALBY": {
    blurb: "lil discovery, surprisingly has good TetPC.",
    build_fumen: "v115@pgRpHeRpHewhDeR4CewhilR4CeAtwhgli0RpAeBtwh?Ceg0RpAeAtKeAgH",
    field_fumen: "v115@9gB8HeB8HeA8DeB8CeA8CeC8AeA8KeAgH",
    solutions_fumen: "v115@9gB8RpywR4whB8RpglwwR4AtwhA8g0ilB8BtwhA8i0?C8AtA8whJeAgWaA3/f2AwngHBFbcRASUTOBYIaHBQecRAyl?AAA9gB8hlywR4whB8i0wwR4AtwhA8Rpglg0B8BtwhA8Rpgl?C8AtA8whJeAAPaA08fRB5ngHBFbcRASEZ9ARLaHBQecRAyl?AAA9gB8RpywR4whB8i0wwR4AtwhA8ilg0B8BtwhA8glRpC8?AtA8whJeAAPaAzFwKB4ngHBFbcRASEp2AQIaHBQecRAylAA?A9gB8R4BthlRpB8ywBtglRpA8zhB8i0A8R4wwC8glA8g0Je?AAPZAxCoAB0ngHBFbcRASkeOB0mv2AUo78AZAAAA9gB8ywR?4i0B8BtR4zhA8RpBtB8ilA8RpwwC8glA8g0JeAAPZAx/P9A?wngHBFbcRASUELB2mv2AUo78AZAAAA9gB8ywR4ilB8BtR4z?hA8RpBtB8i0A8RpwwC8glA8g0JeAAPZAR+3UByngHBFbcRA?SUsHBymv2AUo78AZAAAA9gB8g0Q4BtywwhB8g0R4BtRpwhA?8h0glQ4B8RpwhA8ilC8wwA8whJeAAPZAR4vKBzngHBFbcRA?S03AB2mv2AUo78AZAAAA9gB8glQ4BtywwhB8glR4BtRpwhA?8g0hlQ4B8RpwhA8i0C8wwA8whJeAAPYAZFzABFrnRASo78A?YO02AvfEEBwnAVB"
  },
  "TSTET": {
    blurb: "the PC gang server found this one specifically per my request; i was looking for a TS0 into TetPC setup. contrived, but surprisingly good",
    build_fumen: "v115@pgg0Iei0GeRpHeRpglBeBtAeQ4AeRpglCeBtR4Rphl?AezhQ4JeAgH",
    field_fumen: "v115@9gA8IeC8GeB8HeC8BeB8AeA8KeAgH",
    solutions_fumen: "v115@9gA8i0ilRpwhC8g0glR4RpwhB8BtR4ywwhC8BtB8ww?A8whJeAgWaA1FgRBwngHBFbcRASUr2AROaHBQecRAylAAA9?gA8i0R4AtRpwhC8g0glBtRpwhB8ilAtywwhC8R4B8wwA8wh?JeAAPaAyCQ9A2ngHBFbcRAS0uABXOaHBQecRAylAAA9gA8B?tRpg0zhC8Rpi0hlB8BtR4ywglC8R4B8wwA8glJeAAPZAxCY?HB0ngHBFbcRASk2RB0mv2AUo78AZAAAA9gA8i0R4ywwhC8g?0glRpwwAtwhB8ilRpBtwhC8R4B8AtA8whJeAAPZAx/3UB5n?gHBFbcRASk22A2mv2AUo78AZAAAA9gA8i0BtywwhC8R4BtR?pwhB8R4ilRpwhC8g0glB8wwA8whJeAAPZAR435A2ngHBFbc?RAS0H6Aymv2AUo78AZAAAA9gA8i0zhhlC8g0RpQ4ywB8BtR?pR4wwglC8BtB8Q4A8glJeAAPYAWV+ABFrnRASo78A4cNEBv?fEEBwnAVB9gA8BtRpg0ywwhC8Rpi0glwhB8BtR4ilwhC8R4?B8wwA8whJeAAPYAV1IEBFrnRASo78AY7REBvfEEBwnAVB"
  },
  "FALLBACK": {
    blurb: "for when you place O one tile from edge and your queue precludes kuruma; TSD-DPC with I shifted.",
    build_fumen: "v115@1gAtGewhBtGewhAtCehlRpg0whRpAeR4glRpg0whRp?R4AeglAeh0JeAgH",
    field_fumen: "v115@JhA8GeC8GeE8AeA8AeB8JeAgH",
    solutions_fumen: "v115@9gRphlBtzhRpA8glQ4Bti0C8glR4ywg0E8Q4A8wwB8?JeAgWaA3/f2AwngHBFbcRASUTOBYIaHBQecRAylAAA9gRpB?thlQ4i0RpA8BtglR4wwg0C8zhywE8glA8Q4B8JeAAPaAyCI?OB4ngHBFbcRAS0GEBQIaHBQecRAylAAA9gRphlQ4ywAtg0R?pA8glR4wwBtg0C8glzhh0E8Q4A8AtB8JeAAPaAS4f2AwngH?BFbcRAS0m2AQUaHBQecRAylAAA9gRpBtR4ywg0RpA8Btzhg?0C8R4ilh0E8glA8wwB8JeAAPZAREoABzngHBFbcRAS0o9A0?mv2AUo78AZAAAA9gRpBtR4ywglRpA8Bth0ilC8R4g0zhE8g?0A8wwB8JeAAPZAxC45A0ngHBFbcRASkGLB0mv2AUo78AZAA?AA"
  },
  "TKISHIFT": {
    blurb: "i like this one better than the unshifted variant and go for it a lot. great tetpc and tsd chances",
    build_fumen: "v115@+gRpAeR4AtDeRpR4BtBeg0RpilAtCeg0RpglzhAeh0?JeAgH",
    field_fumen: "v115@ShB8AeC8DeF8BeA8JeAgH",
    solutions_fumen: "v115@9gwhRph0R4ilwhRpg0R4ywAtwhB8g0C8wwBtwhF8gl?AtA8JeAgWaA0/P9A0ngHBFbcRASEZ9AYIaHBQecRAylAAA9?gwhRph0R4ywwhRpg0R4hlwwAtwhB8g0C8glBtwhF8glAtA8?JeAAPaA08fRB5ngHBFbcRASEZ9ARLaHBQecRAylAAA9gzhB?thlRph0ywBtglRpg0B8wwC8glR4g0F8R4A8JeAAPaAT+P9A?xngHBFbcRAS0OOBSOaHBQecRAylAAA9gzhBthlR4h0ywBtg?lRpg0B8wwC8glRpg0F8R4A8JeAAPZAx/3UB1ngHBFbcRASk?22A0mv2AUo78AZAAAA"
  }, 
  "TWOL": {
    blurb: "the best one BY FAR. you get TWO perfect clears, and really good TSS+ chance. if you can get the 2L PC with your queue, ALWAYS go for it",
    build_fumen: "v115@rgR4GeR4HewwBtFeywBtEeRpg0zhglTpi0ilRpJeAg?H",
    fiedl_fumen: "v115@/gB8GeB8HeC8FeE8OeAgH",
    solutions_fumen: "v115@9gh0B8R4zhg0B8R4ywhlg0C8BtwwRpglE8BtRpglJe?AgWaAU7HOB4ngHBFbcRASEB6AVRaHBQecRAylAAA9gh0B8R?4Bthlg0B8R4RpBtglg0C8zhwwglE8RpywJeAAPaASEAEB1n?gHBFbcRAS0GEBTOaHBQecRAylAAA9gh0B8Btzhg0B8ywR4h?lg0C8wwR4RpglE8BtRpglJeAAPaAy8P9A5ngHBFbcRAS0+5?AXOaHBQecRAylAAA9gh0B8zhR4g0B8ywBthlg0C8wwRpBtg?lE8RpR4glJeAAPaAS7HOB0ngHBFbcRAS0+5AURaHBQecRAy?lAAA9gh0B8R4zhg0B8R4ywRpg0C8BtwwilE8BtglRpJeAAP?aAS7XHBwngHBFbcRAS0+5ATOaHBQecRAylAAA9gh0B8zhQ4?glg0B8ywBtR4g0C8wwRpBtQ4E8RpilJeAAPZAx//DB4ngHB?FbcRASU0RBwmv2AUo78AZAAAA9gh0B8R4ywAtg0B8R4Rpww?Btg0C8zhAtglE8RpilJeAAPZAx8P9A1ngHBFbcRASECLB4m?v2AUo78AZAAAA9gh0B8Btzhg0B8ywR4Rpg0C8wwR4ilE8Bt?glRpJeAAPYATluABFrnRASo78A4pvRBvfEEBwnAVB"
  }
}

const extra_T = {
  "MKO": {
    build_fumen: "v115@9gwhh0EeQ4Aewhg0CeAtRpR4whg0wwAeBtRpglQ4wh?ywAtAeilKeAgH",
    field_fumen: "v115@RhC8EeA8AeE8AeC8KeAgH",
    solutions_fumen: "v115@9gRpQ4Bti0glwhRpR4BtilwhC8Q4ywg0A8whE8wwC8?whJeAgWaA15HOBxngHBFbcRASE5KBQRaHBQecRAylAAA9gR?pg0ilR4AtwhRpi0R4BtwhC8glywAtA8whE8wwC8whJeAAA9?gRpQ4ywh0AtwhRpR4hlg0BtwhC8Q4wwglg0AtA8whE8glC8?whJeAAPZARBQ9AzngHBFbcRASkO6A4mv2AUo78AZAAAA9gR?pQ4Bti0hlRpR4BtzhC8Q4ywg0A8glE8wwC8glJeAAPYAYFz?ABFrnRASo78AY+o2AvfEEBwnAVB",
    blurb: "pretty darn good, 0% b2b tho.",
  },
  "UPSIDEDOWN": {
    build_fumen: "v115@ugglIeglDewhBeBthlCewhCeBtDewhg0AeywR4Rpwh?i0wwR4AeRpJeAgH",
    field_fumen: "v115@4gA8IeA8DeA8BeD8CeF8DeG8AeB8JeAgH",
    solutions_fumen: "v115@zgi0RpA8Q4hlwhBtg0RpA8R4glwhA8BtD8Q4glwhF8?ywwhG8wwB8JeAgWaAW+/DB4ngHBFbcRASUb9AVIaHBQecRA?ylAAAzgQ4hlRpA8i0whR4glRpA8Btg0whA8Q4glD8BtwhF8?ywwhG8wwB8JeAAPaA28fRBxngHBFbcRASUb9ARRaHBQecRA?ylAAAzgRpi0A8BtglwhRpR4g0A8ilwhA8R4D8BtwhF8ywwh?G8wwB8JeAAPaATE45A3ngHBFbcRAS0+UBSOaHBQecRAylAA?AzgRpi0A8zhRpR4g0A8BthlA8R4D8BtglF8ywglG8wwB8Je?AAPaAz/nAB2ngHBFbcRAS0OOBYLaHBQecRAylAAAzgRpR4g?lA8i0whRpilA8Btg0whA8R4D8BtwhF8ywwhG8wwB8JeAAPa?AT4nAB2ngHBFbcRAS0eHBTIaHBQecRAylAAAzgBti0A8RpR?4zhg0A8RphlA8BtD8R4glF8ywglG8wwB8JeAAPZAR+f2Axn?gHBFbcRASU02A2mv2AUo78AZAAAAzgzhglA8Q4i0BtilA8R?4RpA8BtD8Q4RpF8ywg0G8wwB8JeAAPYAWlnHBFrnRASo78A?4Mr2AvfEEBwnAVB",
    blurb: "offers a nontrivial tetPC chance; extremely good for maintaining B2B; one can slide the T under the S even after it is placed while still maintaining B2B.",
  },
  "ELEPHANT": {
    build_fumen: "v115@ygwhIewhCehlDewhQ4Ceglh0BtwhR4Aewwglg0RpBt?AeQ4ywg0RpLeAgH",
    field_fumen: "v115@GhA8IeA8CeB8DeA8AeG8LeAgH",
    solutions_fumen: "v115@9gwhh0AtRpywA8whg0BtRpR4glA8whg0AtB8R4wwgl?A8whG8hlJeAgWaA08nABzngHBFbcRASEB6AYOaHBQecRAyl?AAA9gywAtQ4zhA8h0BtR4RpglA8g0wwAtB8Q4RpglA8g0G8?hlJeAAPaASBwKB3ngHBFbcRAS0uABUOaHBQecRAylAAA9gw?hili0RpA8whglR4ywRpA8whR4B8wwg0BtA8whG8BtJeAAPa?Ay535AxngHBFbcRAS0m2AWOaHBQecRAylAAA9gwhilywRpA?8whglR4i0RpA8whR4B8wwg0BtA8whG8BtJeAAA9gwhh0AtR?pR4glA8whg0BtRpywA8whg0AtB8R4wwglA8whG8hlJeAAPZ?AxFg2A1ngHBFbcRAS0ILBwmv2AUo78AZAAAA9gwhywRpi0A?8whilRpR4g0A8whglwwB8R4BtA8whG8BtJeAAA9gwhilRpi?0A8whywRpR4g0A8whglwwB8R4BtA8whG8BtJeAAA9gBtRpz?hglA8h0RpywR4A8g0BtB8wwR4glA8g0G8hlJeAAPZAR+P9A?5ngHBFbcRASUk9Awmv2AUo78AZAAAA9gh0RpzhglA8BtRpy?wR4A8g0BtB8wwR4glA8g0G8hlJeAAA9gBtRpywR4A8h0Rpz?hglA8g0BtB8wwR4glA8g0G8hlJeAAPYAZlf9AFrnRASo78A?Ye22AvfEEBwnAVB",
    blurb: "called that way from the JOS shape. found this as a T-two-tiles-from-edge recovery. a bit silly and impractical"
  },
  "ALL": {
    build_fumen: merge_pages([
      "v115@3gglGeRpglDewhAeAtRphlBeg0whBtR4wwCeg0whAt?R4ywAeh0whJeAgWaAFLDmClcJSAVDEHBEooRBUoAVBTePFD?vCBAA",
      "v115@3gglGeR4glDewhAeR4AthlBeg0whRpBtwwCeg0whRp?AtywAeh0whJeAgWaAFLDmClcJSAVDEHBEooRBUoAVBPePFD?zCBAA"
    ]),
    field_fumen: "v115@LhA8GeC8DeA8AeE8BeB8JeAgH",
    solutions_fumen: "v115@9gwhh0R4Rpilwhg0R4A8Rpywwhg0C8BtglwwA8whE8?BtB8JeAgWUAWBIOBgngHBg3CwBAn9wCPt/VC9gwhh0R4Rpy?wwhg0R4A8Rpilwhg0C8BtglwwA8whE8BtB8JeAAPUAWBIOB?gngHBg3CwBAn9VCPt/wC9gilR4h0ywglAtR4A8g0zhBtC8g?0RpwwA8AtE8RpB8JeAAPUAV+f2AgngHBg3CwBgmbMCKNExC?9gywR4zhAth0R4A8ilBtg0wwC8glRpAtA8g0E8RpB8JeAAP?UAzFgRBgngHBg3CwBgmPFDMNOMC9gilR4i0RpglAtR4A8yw?RpBtC8zhA8AtE8wwg0B8JeAAPUATBIOBgngHBg3CwBgdjxC?PNUPC9gh0ywBtglRpg0R4wwA8ilRpR4C8zhA8g0E8BtB8Je?AAPUATBIOBgngHBg3CwBgtjPCvCmFD9gwhh0R4Btilwhg0R?4A8Rpywwhg0C8RpglwwA8whE8BtB8JeAAPUASEwKBgngHBg?3CwBgW9wCz/TFD9gwhh0R4BtwwRpwhg0R4A8ilRpwhg0C8g?lywA8whE8BtB8JeAAPUASEwKBgngHBg3CwBgtKWCz/lFD9g?h0ywzhAtg0R4wwA8ilBtR4C8glRpAtA8g0E8RpB8JeAAPUA?SBIOBgngHBg3CwBg2jFDsP9wC9gilR4zhAtRpR4A8i0BtRp?C8ywAtA8glE8wwg0B8JeAAPUAx8nABgngHBg3CwBA+aFDKN?8LC",
    blurb: "blurby blurb",
    mirror: false,
  },
}

const extra_S = {
  "O2S": {
    build_fumen: "v115@6gQ4IeR4whQ4hlh0CeQ4whR4glg0BtAeRpwhAeQ4gl?g0AeBtRpwhJeAgWaAFLDmClcJSAVDEHBEooRBPoAVBaentC?MNBAA",
    field_fumen: "v115@OhA8IeC8AeC8AeE8JeAgH",
    solutions_fumen: "v115@9gwhglQ4ywh0RpwhglR4wwAtg0A8RpwhhlQ4Btg0C8?whC8AtE8JeAgWUAYEoABgngHBg3CwBAnFgCqyTxC9gwhBty?wR4Rpwhg0BtwwR4A8Rpwhi0ilC8whC8glE8JeAAPUAYBIOB?gngHBg3CwBAi3LCPtjxC9gwhilR4h0RpwhglwwR4Atg0A8R?pwhywBtg0C8whC8AtE8JeAAPUA48nABgngHBg3CwBAn9wCv?vTWC9gg0zhywRpi0Q4BtwwA8RpilR4BtC8glC8Q4E8JeAAP?UAW4nABgngHBg3CwBAXMgCq+LMC9gBtzhR4Rph0ywR4A8Rp?g0BtwwilC8g0C8glE8JeAAPUA1CwKBgngHBg3CwBAiHgCzu?bMC9gh0zhR4RpBtywR4A8Rpg0BtwwilC8g0C8glE8JeAAPU?A1CwKBgngHBg3CwBAirgCzu3LC9gzhBtR4Rph0wwhlR4A8R?pg0ywglBtC8g0C8glE8JeAAPUAT4f2AgngHBg3CwBACmPCP?tbMC",
    blurb: "You can get a TetPC more than 4/5ths the time, which is some insane work.",
    mirror: false,
  },
  "S2O": {
    build_fumen: "v115@2gRpEewhBeRpEewhCeR4Bthlwhg0AeT4Btglwhi0R4?CeglJeAgWaAFLDmClcJSAVDEHBEooRBToAVBqiLuCJHBAA",
    field_fumen: "v115@KhB8EeA8BeB8EeF8CeA8JeAgH",
    solutions_fumen: "v115@9gQ4hlzhywR4glB8Rpg0wwAtA8Q4glB8Rpg0BtF8h0?AtA8JeAgWaAU4XHB2ngHBFbcRASEp2AUOaHBQecRAylAAA9?gRpg0zhilRpg0B8Q4ywAtA8h0B8R4wwBtF8Q4glAtA8JeAA?PaAzC45A0ngHBFbcRAS0mRBXLaHBQecRAylAAA9gilzhi0g?lRpB8Q4Btwwg0A8RpB8R4ywF8Q4BtA8JeAAPaAz/35AyngH?BFbcRAS0OOBXIaHBQecRAylAAA9gi0zhglR4Btg0B8ilRpA?8BtB8ywRpF8wwR4A8JeAAPaAyFYHB2ngHBFbcRAS0GEBZIa?HBQecRAylAAA9gRpg0zhywRpg0B8Q4BtwwglA8h0B8R4ilF?8Q4BtA8JeAAPaASBwKBzngHBFbcRAS0uABULaHBQecRAylA?AA9gi0zhywBtg0B8RpR4glA8BtB8RpilF8R4wwA8JeAAPZA?RE45AzngHBFbcRAS0Q6A0mv2AUo78AZAAAA9gBtglzhRpg0?ilB8Q4ywg0A8BtB8R4wwh0F8Q4RpA8JeAAPZAx//DB4ngHB?FbcRASU0RBwmv2AUo78AZAAAA",
    blurb: "100% cover, but avoid whenever you can. I find it boring to use: a plain failsafe that doesn't lend itself to bonus scoring. 0% TetPC chance btw.",
    mirror: false,
  },
  "HOLDO": {
    blurb: "peak. I always go for this one; high scoring. You can even squeeze a TS0 in before a TetPC.",
    build_fumen: "v115@6gg0CeRpDeg0BeglRpR4Aeh0AtAeglywT4Bthlwwzh?R4AtJeAgH",
    field_fumen: "v115@OhA8CeB8DeA8BeE8AeC8KeAgH",
    solutions_fumen: "v115@9gh0R4AtRphlwhg0R4BtRpA8glwhg0B8AtywA8glwh?E8wwC8whJeAgWaA48/DBxngHBFbcRASkd9AQOaHBQecRAyl?AAA9gzhAtRpi0ilBtRpA8Q4g0glB8AtywA8R4E8wwC8Q4Je?AAPaATBAEBzngHBFbcRAS0mRBTRaHBQecRAylAAA9gh0R4y?whlwhg0R4RpwwAtA8glwhg0B8RpBtA8glwhE8AtC8whJeAA?PaAT4f2AwngHBFbcRAS0eHBRLaHBQecRAylAAA"
  },
  "ELPTSHIFTED": {
    blurb: "discovered this, and was surprised it wasn't documented anywhere. great TSS+ chances, easy solves (easier than regular elephant imo)",
    build_fumen: "v115@ChR4Bewhh0BtR4Cewhg0RpBtR4Aeglwhg0RpAeR4il?whJeAgH",
    field_fumen: "v115@WhB8BeD8AeF8JeAgH",
    solutions_fumen: "v115@9gilg0zhRpglR4i0BtRpR4ywB8BtD8wwF8JeAgWaAU?435AyngHBFbcRASEp2ASLaHBQecRAylAAA9gilRpzhAtglR?4Rpi0BtR4ywB8g0AtD8wwF8JeAAPaAzCgRB2ngHBFbcRAS0?+UBQUaHBQecRAylAAA9gh0AtRpilR4g0BtRpglzhg0AtywB?8R4D8wwF8JeAAPaAz5/DBzngHBFbcRAS0eHBYOaHBQecRAy?lAAA9gh0ywilR4g0RpwwAtglzhg0RpBtB8R4D8AtF8JeAAP?ZAxFAEBwngHBFbcRAS0gOB4mv2AUo78AZAAAA9gRpywg0zh?RpglwwAti0R4ilBtB8R4D8AtF8JeAAPZAREgRB1ngHBFbcR?AS0wHBwmv2AUo78AZAAAA9gg0R4ilBtRpi0glzhRpR4ywB8?BtD8wwF8JeAAPZAR4/DB4ngHBFbcRAS0f9A4mv2AUo78AZA?AAA9gh0Q4ywBtRpg0ilzhRpg0glR4wwB8BtD8Q4F8JeAAPZ?AR4nAByngHBFbcRAS0f9Awmv2AUo78AZAAAA9ggli0zhRpg?lywR4BtRphlwwR4B8BtD8g0F8JeAAPYAY1gHBFrnRASo78A?Yu2KBvfEEBwnAVB9gg0R4ywBtRpR4hlzhRpi0glwwB8BtD8?glF8JeAAPYAXVm9AFrnRASo78A4sYEBvfEEBwnAVB9gg0R4?ilBtRpi0wwzhRpR4ywB8BtD8glF8JeAAPYATlgOBFrnRASo?78AYbk2AvfEEBwnAVB"
  }
}

const extra_Z = {
  "O2Z": mirror_DPC(extra_S.O2S),
  "Z2O": mirror_DPC(extra_S.S2O),
}

const extra_I = {
  "I2L2O": {
    blurb: "i go for this one. good tsd or quad pc, can't get both at once or anyth.",
    build_fumen: merge_pages([
      "v115@9gRpCeQ4BtBeRpglBeR4BtAeilCeQ4i0zhAezhg0Je?AgWaAFLDmClcJSAVDEHBEooRBJoAVBp/TFDTHBAA",
      "v115@9gRpCei0BeRpglBeBtg0Q4AeilCeBtR4zhAezhQ4Je?AgWaAFLDmClcJSAVDEHBEooRBJoAVBJtjWCv/AAA",
      "v115@9gBtCeilBeg0BtBeglRpQ4Aei0CeRpR4zhAezhQ4Je?AgWaAFLDmClcJSAVDEHBEooRBJoAVBJ3jPC6CBAA"
    ]),
    field_fumen: "v115@RhB8CeC8BeC8BeD8KeAgH",
    solutions_fumen: "v115@9gRpywBthlwhRpQ4wwh0BtglwhB8R4g0C8glwhC8Q4?g0D8whJeAgWaA1CYHBwngHBFbcRASEpRBZUaHBQecRAylAA?A9gRpi0BthlwhRpQ4ywBtglwhB8R4wwC8glwhC8Q4g0D8wh?JeAAPaA1/f2AwngHBFbcRASEROBXLaHBQecRAylAAA",
    mirror: false,
  },
  "BIGL": {
    blurb: "i discovered it and called it that cuz the IOLI structure on the left looked like a big L :o",
    build_fumen: "vv115@pgwhIewhIewhCeR4AtCewhBeR4BtBeg0RpilAtCeg0?RpglzhAeh0JeAgH",
    field_fumen: "v115@9gA8IeA8IeA8CeC8CeA8BeD8BeA8JeAgH",
    solutions_fumen: "v115@9gA8h0wwBtzhA8g0ywBtglRpA8g0R4C8glRpA8R4D8?hlA8JeAgWaAU4vKBzngHBFbcRASEp2AUUaHBQecRAylAAA9?gA8whilR4Rpg0A8whglAtR4ywg0A8whBtC8wwh0A8whAtD8?RpA8JeAAPaAz535A5ngHBFbcRAS0eHBXLaHBQecRAylAAA9?gA8zhR4ywA8i0R4hlwwAtA8Rpg0C8glBtA8RpD8glAtA8Je?AAPaAyFQ9A5ngHBFbcRAS0GEBXRaHBQecRAylAAA9gA8ywB?tzhA8glwwR4Bti0A8glR4C8Rpg0A8hlD8RpA8JeAAPaASEA?EB1ngHBFbcRAS0GEBTOaHBQecRAylAAA9gA8ilBtzhA8Q4y?wBti0A8R4wwC8Rpg0A8glQ4D8RpA8JeAAPaAy8/DB5ngHBF?bcRAS0+5AYOaHBQecRAylAAA9gA8ilBtzhA8glywBtg0R4A?8RpwwC8i0A8RpD8R4A8JeAAPaAS7f2A2ngHBFbcRAS0+5AR?LaHBQecRAylAAA9gA8BtR4wwzhA8glR4ywi0A8glBtC8Rpg?0A8hlD8RpA8JeAAPZAREg2AyngHBFbcRAS042A4mv2AUo78?AZAAAA9gA8zhwwBthlA8g0R4ywBtglA8i0C8RpglA8R4D8R?pA8JeAAPZAxC45A4ngHBFbcRASkGLB2mv2AUo78AZAAAA9g?A8whh0BthlRpA8whg0R4BtglRpA8whR4C8ywA8whg0D8glw?wA8JeAAPZAx/fRBzngHBFbcRASUMVB4mv2AUo78AZAAAA",
    mirror: false,
  },
  "DECENT": {
    blurb: "tuff somewhat, good tetpc and tsd chances; don't go out of my way to use",
    build_fumen: "v115@ygwhIewhBtCeQ4Cewhg0BtBeR4Bewhi0CeQ4glRpzh?AeilRpJeAgH",
    field_fumen: "v115@GhA8IeC8CeA8CeD8BeB8BeA8JeAgH",
    solutions_fumen: "v115@9gilBti0whA8glywBtQ4g0whC8wwRpA8R4whD8RpB8?Q4whA8JeAgWaAUB4UB4ngHBFbcRASExABWUaHBQecRAylAA?A9gRpili0whA8RpglywQ4g0whC8BtwwA8R4whD8BtB8Q4wh?A8JeAAPaAU4/DB4ngHBFbcRASEp2AUIaHBQecRAylAAA9gz?hR4wwhlA8i0R4ywglC8g0RpA8BtglD8RpB8BtA8JeAAPaAT?7fRByngHBFbcRAS02KBVOaHBQecRAylAAA9gilRpi0whA8g?lBtywQ4g0whC8BtwwA8R4whD8RpB8Q4whA8JeAAPaAT4P9A?4ngHBFbcRAS0eHBSRaHBQecRAylAAA9gRpywzhA8RpQ4wwh?0BtglC8R4g0A8ilD8Q4g0B8BtA8JeAAPZAxCoABwngHBFbc?RASkeOBymv2AUo78AZAAAA9gRpBtR4hlwhA8Rpg0BtywwhC?8i0A8wwglwhD8R4B8glwhA8JeAAPZAx5fRBzngHBFbcRAS0?HVB2mv2AUo78AZAAAA9gilRpzhA8glywR4i0C8wwR4A8Btg?0D8RpB8BtA8JeAAPYAZVWEBFrnRASo78AYuILBvfEEBwnAV?B9gRpzhi0A8RpQ4hlywAtC8R4glA8wwBtD8Q4glB8Atg0A8?JeAAPYAZ1xRBFrnRASo78AYe2RBvfEEBwnAVB9gRpBtR4i0?A8RpilzhC8glBtA8ywD8R4B8wwg0A8JeAAPYAW1QOBFrnRA?So78A4s2KBvfEEBwnAVB",
    mirror: false,
  },
  "BUTTER": {
    blurb: "great for tetpc & thus b2b; easy solves",
    build_fumen: "v115@3gg0Iei0CezhglQ4CeAtRpilR4AeBtRpzhQ4AeAtKe?AgH",
    field_fumen: "v115@LhA8IeC8CeG8AeA8KeAgH",
    solutions_fumen: "v115@9gh0hlywR4whg0RpglA8wwR4Atwhg0RpglC8BtwhG8?AtA8whJeAgWaAXEgRB5ngHBFbcRASUDVBXRaHBQecRAylAA?A9gglRpg0ywR4whglRpg0A8wwR4Atwhhlh0C8BtwhG8AtA8?whJeAAPaAV7HOB4ngHBFbcRASE5KBWIaHBQecRAylAAA"
  }
}

const extra_J = {
  "OJZS": {
    blurb: "see",
    build_fumen: "v115@8gwhg0Fehlwhi0R4CeglwhRpR4BtAeg0glwhRpCeBt?i0JeAgWaAFLDmClcJSAVDEHBEooRBKoAVBa3LMCs/AAA",
    field_fumen: "v115@QhB8FeE8CeE8JeAgH",
    solutions_fumen: "v115@9gQ4Bti0zhR4Btwwg0ilB8Q4RpxwglE8RpwwE8JeAg?WUA3/XHBgngHBg3CwBgGWWCznNPC9gRpQ4i0zhRpR4wwg0i?lB8BtQ4xwglE8BtwwE8JeAAPUA25HOBgngHBg3CwBAXWWCP?dNPC9gzhhlh0R4BtRpwwglg0R4B8Btxwglg0E8RpwwE8JeA?APUA1CAEBgngHBg3CwBAuLuCqyCMC9gi0wwzhR4Btg0xwRp?R4B8BtwwglRpE8ilE8JeAAPUAV7nABgngHBg3CwBAyaFDze?NPC9gQ4BtRpwwzhR4BtxwilB8Q4g0RpwwglE8i0E8JeAAPU?A0FAEBgngHBg3CwBA/DxCzHDMC9gRpilwwh0R4RpBtxwg0R?4B8zhwwg0E8glBtE8JeAAPUAU4f2AgngHBg3CwBgtjPC0HL?WC9gi0wwRpzhBtxwRpilB8BtwwR4glE8g0R4E8JeAAPUATE?wKBgngHBg3CwBgsjWCvu3LC9gi0R4wwzhBtR4xwilB8BtRp?wwglE8g0RpE8JeAAPUAyFIOBgngHBg3CwBgmjWCUt3LC9gB?tRphlh0R4zhwwglg0R4B8Btxwglg0E8RpwwE8JeAAPUAy5/?DBgngHBg3CwBA+jPCMergC9gRpBtR4zhRpwwi0ilB8xwR4g?0glE8wwBtE8JeAAPUAS4P9AgngHBg3CwBAOUPCPtbMC9gi0?wwR4zhBtxwRpilB8BtwwRpglE8g0R4E8JeAAPUAxCAEBgng?HBg3CwBgmjWCUt3LC9gBtRpwwilR4zhi0R4B8Btxwglg0E8?RpwwE8JeAAPUAx5/DBgngHBg3CwBgs3LC0XMgC",
    mirror: false,
  },
  "OJSZ": {
    blurb: "see",
    build_fumen: "v115@0gg0GewhAeg0Eehlwhh0Q4BtCeglwhRpR4BtAeg0gl?whRpAeQ4Cei0JeAgWaAFLDmClcJSAVDEHBEooRBKoAVBPtb?MCs/AAA",
    field_fumen: "v115@IhA8GeA8AeA8EeE8AeA8CeC8JeAgH",
    solutions_fumen: "v115@9gh0whRpilR4g0A8whRpglwwR4A8g0A8whBtxwE8wh?A8BtwwC8JeAgWUAY7fRBgngHBg3CwBAXOMCTn/VC9gh0Btz?hR4g0A8wwBthlR4A8g0A8xwRpglE8wwA8RpglC8JeAAPUAX?EIOBgngHBg3CwBgGExCz33LC9gh0whBtilR4g0A8whRpglw?wR4A8g0A8whRpxwE8whA8BtwwC8JeAAPUAX4f2AgngHBg3C?wBgGOMCz/TFD",
    mirror: false,
  },
  "JO": {
    blurb: "see",
    build_fumen: "v115@AhhlAeAtBewhQ4CeglBtRpwhR4Aeg0glAtg0RpwhAe?Q4Ael0whJeAgWaAFLDmClcJSAVDEHBEooRBKoAVBKuytC6C?BAA",
    field_fumen: "v115@UhB8AeA8BeA8AeA8AeG8JeAgH",
    solutions_fumen: "v115@9gwhilR4Ati0whglwwR4BtRpg0whxwB8AtA8RpA8wh?A8wwG8JeAgWUAX7fRBgngHBg3CwBgW9wCat/VC9gzhR4Ati?0wwhlR4BtRpg0xwglB8AtA8RpA8wwA8glG8JeAAPUA18f2A?gngHBg3CwBgGWWCat3LC9gwhwwh0R4AtglRpwhxwR4BtglR?pwhwwg0B8AtA8hlA8whA8g0G8JeAAPUA08nABgngHBg3CwB?g9LgCaNmPC9gzhR4AtglRph0wwR4BtglRpg0xwB8AtA8hlA?8g0A8wwG8JeAAPUAU7XHBgngHBg3CwBAu/VCvHMMC9gzhR4?BtRph0wwR4ilRpg0xwB8glA8BtA8g0A8wwG8JeAAPUAz8nA?BgngHBg3CwBAuHgCzibMC9gwhwwh0R4BtRpwhxwR4ilRpwh?wwg0B8glA8BtA8whA8g0G8JeAAPUASEwKBgngHBg3CwBgty?tCsuzPC",
    mirror: false,
  },
}

const extra_L = {
  "OLSZ": mirror_DPC(extra_J.OJZS),
  "OLZS": mirror_DPC(extra_J.OJSZ),
  "LO": mirror_DPC(extra_J.JO),
}



export { DPC, extra_O, extra_T, extra_S, extra_Z, extra_J, extra_L, extra_I, mirror_name }