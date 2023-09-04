<template>
  <Transitions class="flex flex-wrap">
    <Item
      v-for="(x, index) in arr"
      :key="x"
      class="ml-1 mb-1">{{ x }}</Item>
  </Transitions>

  <div class="mt-4">
    在
    <ElInputNumber v-model="index" :controls="false" class="w-20" />
    位置插入元素
    <ElInputNumber ref="valueInputIns" v-model="value" :controls="false" class="w-20" @keydown.enter="done" />

    <ElButton type="primary" class="ml-4" @click="done">确定</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElInputNumber, ElMessage, InputInstance } from 'element-plus';
import { ref } from 'vue'
import { insert } from '@shoppingzh/tools/lib/array'
import Transitions from './Transitions.vue'
import Item from './Item.vue';

const arr = ref([])
const index = ref(0)
const value = ref()
const valueInputIns = ref<InputInstance>()

function done() {
  try {
    if (value.value == null) return
    insert(arr.value, index.value, value.value)

    setTimeout(() => {
      valueInputIns.value && valueInputIns.value.focus()
    }, 200)
  } catch {
    ElMessage.error('插入失败！')
  }
}

function init() {
  new Array(5).fill(null).forEach((_, index) => {
    insert(arr.value, index, index + 1)
  })
}

init()

</script>
