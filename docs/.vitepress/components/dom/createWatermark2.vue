<template>
  <div ref="el" class="w-full h-[400px]" />
</template>

<script setup lang="ts">
import { createWatermark } from '@shoppingzh/tools/lib/dom'
import { onMounted, ref } from 'vue';

const el = ref()
const el2 = ref()

function render() {
  createWatermark(el.value, '涉密内容', {
    bgColor: 'rgba(0, 0, 0, .3)',
    textColor: 'rgba(0, 0, 0, .2)',
    rotate: -30,
    // padding: [2, 2],
  })
}

onMounted(render)
</script>
