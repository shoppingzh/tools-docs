<template>
  <div ref="containerEl" class="w-full">
    <canvas ref="el" height="400" />
  </div>
</template>

<script setup lang="ts">
import { createWatermark } from '@shoppingzh/tools/lib/dom'
import { onMounted, ref } from 'vue';
import bg from './bg.jpg'

const containerEl = ref<HTMLElement>()
const el = ref<HTMLCanvasElement>()

function render() {
  el.value.width = containerEl.value.clientWidth

  const ctx = el.value.getContext('2d')
  ctx.fillRect(0, 0, el.value.width, el.value.height)
  const img = new Image()
  img.src = bg

  img.onload = () => {
    ctx.drawImage(img, 0, 0)

    createWatermark(el.value, '我是图片水印', {
      textColor: 'green',
      textSize: 20,
      bgColor: 'rgba(0, 0, 0, .1)',
      fontBold: true,
      rotate: 30,
      padding: [100, 100],
    })
  }

}

onMounted(render)
</script>
