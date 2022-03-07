let pcf: any = null

export async function get_pc(): Promise<(board: BigInt, sequence: string, allow_hold?: boolean) => string> {
  if (!pcf) {
    pcf = await import("@mgtd/pcf-wasm/pcf_wasm.js");
    await pcf.default();
    return pcf.get_pc
  }
  return pcf.get_pc
}
