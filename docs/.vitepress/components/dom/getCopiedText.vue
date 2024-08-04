<template>
  <div>
    <ElAlert title="当前剪切板内容(点击刷新)：" :closable="false" class="cursor-pointer" @click="loop()">
      {{ text }}
    </ElAlert>
  </div>
</template>

<script setup lang="ts">
import { getCopiedText } from '@shoppingzh/tools/lib/dom'
import { ElAlert } from 'element-plus';
import { onUnmounted, ref } from 'vue';

const text = ref()

async function loop() {
  text.value = await getCopiedText()
}
loop()

window.addEventListener('copy', loop)
onUnmounted(() => {
  window.removeEventListener('copy', loop)
})
</script>
