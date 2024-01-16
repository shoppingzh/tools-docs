<template>
  <Layout>
    <template #layout-top>
      <el-backtop>
        <svg-icon name="huojian" class="text-2xl" />
      </el-backtop>
      <div ref="watermarkEl" class="fixed inset-0 z-[99999] pointer-events-none" />
    </template>
    <template #doc-before>
      <DocBefore />
    </template>
  </Layout>
</template>

<script lang="ts">
export const injectKey = Symbol('Layout')
</script>

<script setup lang="ts">
// 具体使用参见：https://vitepress.vuejs.org/guide/theme-introduction#extending-the-default-theme
import Theme from 'vitepress/theme'
import mediumZoom, { Zoom } from 'medium-zoom'
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { useRouter, useRoute, onContentUpdated } from 'vitepress'
import { createWatermark } from '@shoppingzh/tools/lib/dom'

const { Layout } = Theme
let zoom: Zoom
const watermarkEl = ref<HTMLElement>()

onContentUpdated(() => {
  if (!zoom) return
  zoom.detach('.VPDoc img')
  zoom.attach('.VPDoc img')
})

onBeforeMount(() => {
  zoom = mediumZoom(undefined, {
    background: 'rgba(0, 0, 0, .75)',
  })
})

onMounted(() => {
  createWatermark(watermarkEl.value, '工具库', {
    textColor: 'rgba(100, 100, 100, .1)',
    padding: [200, 200],
    rotate: -30,
  })
})


</script>

<style>
.medium-zoom-overlay {
  @apply z-[10000];
}
.medium-zoom-image {
  @apply z-[10001];
}
</style>