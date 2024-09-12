<template>
  <div v-if="step" class="flex border border-gray-200 rounded-md overflow-hidden">
    <div class="flex-1 w-0">
      <component :is="step" :context="context" />
    </div>
    <div class="p-2 w-1/3 min-w-[100px] border-l border-l-gray-300">
      <div ref="tipsEl" class="p-4 bg-green-50 font-semibold text-green-700 rounded-lg">
      </div>
      <div ref="menuEl" class="mt-4"></div>
    </div>
  </div>
  <div v-else>已结束</div>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, ref } from 'vue';
import { list } from './data'
import step1 from './step1.vue'
import step2 from './step2.vue'
import step3 from './step3.vue'
import step4 from './step4.vue'
import { cloneDeep } from 'lodash';
import { injectKey } from './inject';
import { ElNotification } from 'element-plus';

let current = ref(0)
const steps = [step1, step2, step3, step4]
const step = computed(() => steps[current.value])
const context = ref(cloneDeep(list))
const tipsEl = ref<HTMLElement>()
const menuEl = ref<HTMLElement>()

async function next(newContext: any) {
  current.value++
  await nextTick()
  context.value = newContext
}

async function call(fn: (...args: any[]) => any, ...args: any[]) {
  let time = Date.now()
  const result = await fn(...args)
  
  ElNotification({
    type: 'success',
    message: `本次用时：${Date.now() - time}ms`,
  })
  return result
}

provide(injectKey, {
  context,
  next,
  tipsEl,
  menuEl,
  call,
})
</script>

<style scoped lang="postcss">
:deep(.el-tree-node__content) {
  @apply h-[40px];
}
</style>
