<template>
  <ElForm :model="form" label-width="100px">
    <ElFormItem label="下载链接">
      <ElInput v-model="form.url" />
    </ElFormItem>
    <ElFormItem label="文件名">
      <ElInput v-model="form.filename" />
    </ElFormItem>
    <ElFormItem label="新窗口打开">
      <ElSwitch v-model="form.newWindow" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="done">下载</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script setup lang="ts">
import { download } from '@shoppingzh/tools/lib/dom';
import { reactive } from 'vue';

const form = reactive({
  url: '/logo.svg',
  filename: 'my-logo.svg',
  newWindow: false,
})

function done() {
  download(form.url, form.filename, form.newWindow)
}
</script>
