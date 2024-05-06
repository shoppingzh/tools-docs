<template>
  <div>
    <ElRadioGroup v-model="current">
      <ElRadio v-for="item in tabs" :key="item.value" :label="item.value" :disabled="item.disabled">{{ item.name }}</ElRadio>
    </ElRadioGroup>

    <div class="mt-2">
      <ElButton type="primary" size="small" @click="handleAutoSelect">自动选择第一个可用项</ElButton>
      <ElButton size="small" @click="current = undefined">取消选择</ElButton>
      <ElButton size="small" @click="tabs[1].disabled = !tabs[1].disabled" >禁用/取消禁用选项2</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { getValidItem } from '@shoppingzh/tools/lib/others'

const tabs = ref([
  { value: 1, name: '选项1', disabled: true },
  { value: 2, name: '选项2', disabled: false, },
  { value: 3, name: '选项3', disabled: false, },
  { value: 4, name: '选项4', disabled: false, },
])

const current = ref()

function handleAutoSelect() {
  const item = getValidItem(current.value, tabs.value, { value: 'value', valid: o => !o.disabled })
  if (item) {
    current.value = item.value
  }
}

watch(tabs, () => handleAutoSelect(), { deep: true, immediate: true })

</script>
