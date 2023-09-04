<template>
  <Transitions class="flex flex-wrap">
    <Item
      v-for="(x, index) in arr"
      :key="x"
      class="ml-1"
      :class="{ 'bg-red-500 -translate-y-1': indexes.indexOf(index) >= 0 }"
      @click="toggle(index)">{{ x }}</Item>
  </Transitions>

  <div class="mt-4">
    <span class="text-gray-500">选中一些元素</span>，然后 <ElButton type="danger" :disabled="!indexes.length" size="small" @click="done">删除</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Transitions from './Transitions.vue';
import { remove } from '@shoppingzh/tools/lib/array'
import Item from './Item.vue';

const arr = ref(new Array(10).fill(null).map((_, idx) => idx + 1))
const indexes = ref<number[]>([])

function toggle(index: number) {
  const indexIdx = indexes.value.indexOf(index)
  if (indexIdx >= 0) {
    indexes.value.splice(indexIdx, 1)
  } else {
    indexes.value.push(index)
  }
}

function done() {
  remove(arr.value, indexes.value)
  indexes.value = []
}
</script>
