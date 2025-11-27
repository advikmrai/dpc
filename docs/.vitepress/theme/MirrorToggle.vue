<template>
  <button @click="toggle" title="Toggle Mirror (Ctrl+M)" class="mirror-toggle">
    <span v-if="is_mirrored">Normal (Ctrl+M)</span>
    <span v-else>Mirror (Ctrl+M)</span>
  </button>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { is_mirrored, toggle_mirror } from '../../../src/store'

function toggle() {
  toggle_mirror()
}

function handleKeydown(e) {
  if (e.ctrlKey && e.key === 'm') {
    e.preventDefault()
    toggle_mirror()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.mirror-toggle {
  /* Add some basic styling for the button */
  margin-left: 1em;
  padding: 0 1em;
  height: 32px;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
</style>
