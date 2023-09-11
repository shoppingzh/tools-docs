<template>
  <ElForm :model="form" label-width="100px">
    <ElFormItem label="下载链接">
      <ElInput v-model="form.url" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="done">下载</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script setup lang="ts">
import { download, downloadSilent } from '@shoppingzh/tools/lib/dom';
import { reactive } from 'vue';

const form = reactive({
  url: 'https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi',
})

function done() {
  downloadSilent(form.url)
}
</script>
