<template>
  <ElForm>
    <ElFormItem label="标题">
      <ElInput v-model="form.title" />
    </ElFormItem>
  </ElForm>
</template>

<script setup lang="ts">
import { setTitle } from '@shoppingzh/tools/lib/dom';
import { reactive, watch } from 'vue';


const form = reactive({
  title: null,
})
watch(form, () => {
  setTitle(form.title)
}, {immediate: true})
</script>
