<template>
  <div
    v-for="(path, index) in paths"
    :key="index"
    class="flex items-center"
    :class="{ 'mt-2': index > 0 }">
    <div class="flex-1 shrink-0">
      <ElInput
        ref="inputInsList"
        v-model="paths[index]"
        placeholder="按回车添加新行"
        @keydown.enter="handleInsert(index)"
        @keydown.backspace="(e) => handleBackspace(index, e)" />
    </div>
    <div class="ml-4">
      <ElLink type="primary" :underline="false" @click="handleInsert(index)">
        <el-icon><Plus /></el-icon>
      </ElLink>
      <ElLink v-if="paths.length > 1" type="danger" class="ml-4" :underline="false" @click="handleRemove(index)">
        <el-icon><Minus /></el-icon>
      </ElLink>
    </div>
  </div>
  <div class="mt-4">
    <span>结果：</span>
    <span>{{ result }}</span>
  </div>
</template>

<script setup lang="ts">
import { insert, remove } from '@shoppingzh/tools/lib/array';
import { join } from '@shoppingzh/tools/lib/path';
import { InputInstance } from 'element-plus';
import { computed, nextTick, onMounted, ref } from 'vue'

const paths = ref<string[]>(['/a/', '/b', '///c', ''])
const result = computed(() => join(...paths.value))
const inputInsList = ref<InputInstance[]>()

function focus(index: number) {
  nextTick(() => {
    const ins = inputInsList.value[index]
    ins && ins.focus()
  })
}

function handleInsert(index: number) {
  insert(paths.value, index + 1, '')
  focus(index + 1)
}

function handleRemove(index: number) {
  if (index <= 0) return
  remove(paths.value, index)
  focus(index - 1)
}

function handleBackspace(index: number, e: KeyboardEvent) {
  const path = paths.value[index]
  if (path) return
  e.preventDefault()

  nextTick(() => {
    handleRemove(index)
  })
}

onMounted(() => {
  focus(paths.value.length - 1)
})
</script>
