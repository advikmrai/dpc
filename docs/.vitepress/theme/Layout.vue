<template>
  <Layout>
    <template #nav-bar-content-after>
      <MirrorToggle />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import MirrorToggle from './MirrorToggle.vue'

const { Layout } = DefaultTheme
</script>
