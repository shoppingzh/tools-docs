<template>
  <div class="flex flex-wrap">
    <TransitionGroup name="list">
      <div
        v-for="(x, index) in arr"
        :key="x"
        class="
          item ml-1 mb-1 w-8 h-8 shrink-0 text-xs flex items-center justify-center truncate bg-blue-400 text-white
          cursor-pointer transition-all duration-200 hover:scale-[1.2]
        ">{{ x }}</div>
    </TransitionGroup>
  </div>

  <div class="mt-4">
    在
    <ElInputNumber v-model="index" :controls="false" />
    位置插入元素
    <ElInputNumber v-model="value" :controls="false" />

    <ElButton type="primary" class="ml-4" @click="done">确定</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElInputNumber, ElMessage } from 'element-plus';
import { ref } from 'vue'
import { insert } from '@shoppingzh/tools/lib/array'

let key = 0

const arr = ref([])
const index = ref(0)
const value = ref()
const keyMap = ref<Record<string, number>>({})

function done() {
  try {
    insert(arr.value, index.value, value.value)
    keyMap.value[index.value] = key++
  } catch {
    ElMessage.error('插入失败！')
  }
}

function init() {
  new Array(5).fill(null).forEach((_, index) => {
    insert(arr.value, index, index + 1)
    keyMap.value[index] = key++
  })
}

init()

</script>

<style scoped lang="postcss">
.list {
  &-enter-from, &-leave-to {
    @apply bg-green-400 translate-y-[100%];
  }
  &-enter-active, &-leave-active {
    @apply transition-all duration-1000;
  }
}
</style>