<template>
  <ElInput v-model="text" type="textarea" :rows="5" />

  <div class="mt-4">
    <ElButton type="primary" @click="done">下载</ElButton>
  </div>
</template>

<script setup lang="ts">
import { downloadBlob } from '@shoppingzh/tools/lib/dom';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';

const text = ref('')

function done() {
  if (!text.value) return ElMessage.warning('请输入内容')
  downloadBlob(new Blob([text.value], { type: 'text/plain' }), 'input.txt')
}
</script>
