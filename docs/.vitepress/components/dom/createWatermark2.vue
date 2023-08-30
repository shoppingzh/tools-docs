<template>
  <div ref="el" class="w-full h-[300px]" />
</template>

<script setup lang="ts">
import { createWatermark } from '@shoppingzh/tools/lib/dom'
import { onMounted, ref } from 'vue';

const el = ref()
const el2 = ref()

function render() {
  createWatermark(el.value, '0101', {
    bgColor: '#000',
    textColor: 'green',
    rotate: 0,
    padding: [2, 2],
  })
}

onMounted(render)
</script>
