<template>
  <div class="flex">
    <div class="flex-1 w-0">
      <component v-if="step" :is="step" :context="context" />
      <div v-else>已结束</div>
    </div>
    <div ref="menuEl" class="px-4 w-1/5 min-w-[100px] border-l border-l-gray-300">

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, ref } from 'vue';
import { injectKey, list } from './data'
import step1 from './step1.vue'
import step2 from './step2.vue'
import { cloneDeep } from 'lodash';

let current = ref(0)
const steps = [step1, step2]
const step = computed(() => steps[current.value])
const context = ref(cloneDeep(list))
const menuEl = ref<HTMLElement>()

async function next(newContext: any) {
  current.value++
  await nextTick()
  context.value = newContext
}

provide(injectKey, {
  context,
  next,
  menuEl,
})
</script>
