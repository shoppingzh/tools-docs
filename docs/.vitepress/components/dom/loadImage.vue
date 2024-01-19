<template>
  <div ref="el" class="h-[300px] bg-gray-50 dark:bg-gray-600">
    <div class="w-full h-full flex justify-center items-center text-gray-400 text-sm pointer-events-none select-none">等待加载..</div>
  </div>

  <div class="mt-4">
    <ElInput v-model="url" placeholder="请输入图片URL" clearable />
  </div>
  <div class="mt-4">
    <ElButton type="primary" :loading="loading" @click="done">{{ loading ? '加载中..' : '加载' }}</ElButton>
  </div>
</template>

<script setup lang="ts">
import { loadImage, setStyle } from '@shoppingzh/tools/lib/dom';
import { ElMessageBox } from 'element-plus';
import { ref } from 'vue';


const url = ref('/logo.svg')
const loading = ref(false)
const el = ref<HTMLElement>()

async function done() {

  try {
    loading.value = true
    const img = await loadImage(url.value)
    img.classList.add('w-full', 'h-full', 'object-contain')
    if (!el.value) return
    el.value.innerHTML = ''
    el.value.appendChild(img)
  } catch(e) {
    ElMessageBox.alert('加载失败！')
  } finally {
    loading.value = false
  }

}
</script>
