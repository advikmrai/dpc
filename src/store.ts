import { ref } from 'vue'

export const is_mirrored = ref(false)

export function toggle_mirror() {
  is_mirrored.value = !is_mirrored.value
}
