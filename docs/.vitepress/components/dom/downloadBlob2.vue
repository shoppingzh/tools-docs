<template>
  <ElForm>
    <ElFormItem label="下载链接">
      <ElInput v-model="form.url" />
    </ElFormItem>
    <ElFormItem label="文件名">
      <ElInput v-model="form.filename" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" :loading="loading" class="px-10" @click="done">下载</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script setup lang="ts">
import { downloadBlob } from '@shoppingzh/tools/lib/dom';
import { ElMessageBox } from 'element-plus';
import { reactive, ref } from 'vue';


const form = reactive({
  url: '/logo.svg',
  filename: 'my-logo.svg',
})
const loading = ref(false)

async function done() {
  try {
    loading.value = true
    const resp = await fetch(form.url)
    const blob = await resp.blob()
    downloadBlob(blob, form.filename)
  } catch (e) {
    console.log(e);
    ElMessageBox.alert(e, '错误', {
      type: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>
