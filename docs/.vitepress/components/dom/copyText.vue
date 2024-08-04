<template>
  <div>
    <ElInput v-model="text" placeholder="输入文本" clearable />
    <div class="mt-3">
      <ElButton type="primary" :disabled="!text" @click="handleCopy">复制</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElInput, ElMessage } from 'element-plus';
import { ref } from 'vue';
import { copyText } from '@shoppingzh/tools/lib/dom'

const text = ref('hello, world!')

async function handleCopy() {
  await copyText(text.value)
  ElMessage.success('复制成功！')
}

</script>
