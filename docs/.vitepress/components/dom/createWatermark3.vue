<template>
  <div ref="containerEl" class="w-full">
    <canvas ref="el" height="400" />
  </div>
  <ElLink class="mt-2" :underline="false" @click="handleDownload">下载图片</ElLink>
</template>

<script setup lang="ts">
import { createWatermark, downloadBlob, loadImage } from '@shoppingzh/tools/lib/dom'
import { ElMessageBox } from 'element-plus';
import { onMounted, ref } from 'vue';
// import bg from './bg.jpg'

const bg = '/logo.svg'

const containerEl = ref<HTMLElement>()
const el = ref<HTMLCanvasElement>()

async function render() {
  el.value.width = containerEl.value.clientWidth

  const ctx = el.value.getContext('2d')
  ctx.fillRect(0, 0, el.value.width, el.value.height)

  const img = await loadImage(bg)

  ctx.drawImage(img, 0, 0)

  createWatermark(el.value, '我是图片水印', {
    textColor: 'rgba(255, 255, 255, .4)',
    textSize: 12,
    // fontBold: true,
    fontItalic: true,
    rotate: 30,
    padding: [100, 100],
  })
}

function handleDownload() {
  el.value.toBlob((blob) => {
    if (!blob) return ElMessageBox.alert('转Blob失败！')
    downloadBlob(blob, 'image.png')
  }, 'image/png')
}

onMounted(render)
</script>
