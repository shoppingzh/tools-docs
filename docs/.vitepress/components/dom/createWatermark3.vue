<template>
  <canvas ref="el" width="500" height="500" />
</template>

<script setup lang="ts">
import { createWatermark } from 'tools/lib/dom'
import { onMounted, ref } from 'vue';
import bg from './bg.jpg'

const el = ref<HTMLCanvasElement>()

function render() {
  const ctx = el.value.getContext('2d')
  ctx.fillRect(0, 0, el.value.width, el.value.height)
  const img = new Image()
  img.src = bg
  ctx.drawImage(img, 0, 0)

  createWatermark(el.value, '我是图片水印', {
    // bgColor: '#000',
    textColor: 'red',
    // rotate: 0,
    // padding: [2, 2],
  })
}

onMounted(render)
</script>
