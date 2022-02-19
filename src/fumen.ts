import { decoder, encoder, Field, Page } from "tetris-fumen"
import { EncodePages } from "tetris-fumen/lib/encoder"
import * as pako from "pako"

function mirror_name(name: string): string {
  const mirror_map = (c: string) => {
    switch (c) {
      case "Z":
        return "S"
      case "S":
        return "Z"
      case "L":
        return "J"
      case "J":
        return "L"
      default:
        return c
    }
  }

  return [...name].map(x => mirror_map(x)).join('')
}

function merge_pages(pages: Array<string>): string {
  const t = pages.map(x => decoder.decode(x)).flat()
  const res: EncodePages = t.map(x => { return { field: x.field } })
  return encoder.encode(res)
}

function mirror_comments(fumen: string): string {
  const t = decoder.decode(fumen)
  const res: EncodePages = t.map(x => { return { field: x.field, comment: mirror_name(x.comment) } })
  return encoder.encode(res)
}

const base64_arraybuffer = async (data: Uint8Array): Promise<string> => {
  // Use a FileReader to generate a base64 data URI
  const base64url: string = await new Promise((r) => {
    const reader = new FileReader()
    reader.onload = () => r(reader.result as any)
    reader.readAsDataURL(new Blob([data]))
  })

  /*
  The result looks like 
  "data:application/octet-stream;base64,<your base64 data>", 
  so we split off the beginning:
  */
  return base64url.split(",", 2)[1]
}

async function to_techmino_field(page: Field): Promise<string> {
  const piece_id: Record<string, number> = {
    "T": 0x0f, "I": 0x0a, "O": 0x05, "L": 0x04, "J": 0x0c, "S": 0x08, "Z": 0x02, "_": 0x01, "X": 0x15,
  }
  const str_data = [...(
    page.str()
      .split('\n')
      .reverse()
      .filter(x => x != "__________")
      .join('\n'))
  ].filter(x => x != '\n')
  const data = Uint8Array.from(str_data.map(x => piece_id[x]))
  const header = "Techmino Field:"
  return header + await base64_arraybuffer(pako.deflate(data))
}

export { merge_pages, mirror_comments, mirror_name, to_techmino_field }
