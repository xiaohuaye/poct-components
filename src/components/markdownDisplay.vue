<script setup lang="ts">
import { reactive, ref } from 'vue'
import Markdown from '../assets/displayMarkdown.md'
</script>

<template>
  <div class="wrapper">
    <Markdown></Markdown>
  </div>
</template>

<style scoped>
.wrapper {
  overflow: auto;
  height: 100vh;
}
</style>
