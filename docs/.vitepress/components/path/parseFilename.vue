<template>
  <ElForm>
    <ElFormItem label="文件名">
      <ElInput v-model="form.filename" />
    </ElFormItem>
    <ElFormItem label="分隔符">
      <ElSwitch v-model="form.withSeperator" />
    </ElFormItem>
  </ElForm>

  <div v-if="result.basename || result.extname">
    <ElDivider />
    <div v-if="result.basename" class="flex text-lg">
      <div class="relative">
        <div class="text-blue-500 border-b border-b-blue-500">
          {{ result.basename }}
        </div>
        <div class="mt-1 text-xs text-gray-400 text-center">文件名</div>
      </div>
      <div v-if="result.extname" class="ml-4 relative min-w-[50px] text-center">
        <div class="text-green-500 border-b border-b-green-500">
          {{ result.extname }}
        </div>
        <div class="mt-1 text-xs text-gray-400 text-center">后缀名</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { parseFilename } from '@shoppingzh/tools/lib/path';
import { computed, reactive } from 'vue';

const form = reactive({
  filename: '20230911.xpzheng.README.md',
  withSeperator: false,
})

const result = computed(() => parseFilename(form.filename, form.withSeperator))
</script>
