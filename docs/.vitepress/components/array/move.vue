<template>
  <Transitions class="flex flex-wrap">
    <Item
      v-for="(x, index) in arr"
      :key="x"
      class="ml-1"
      :class="{ 'bg-green-500 -translate-y-2': fromIndex === index }"
      @click="click(index)">{{ x }}</Item>
  </Transitions>

  <div class="mt-4">
    <span>点击某个元素选中，再点击另一个元素，移动到该元素的位置</span>
  </div>
</template>

<script setup lang="ts">
import { move } from '@shoppingzh/tools/lib/array';
import { ref } from 'vue';
import Item from './Item.vue';

const arr = ref(new Array(10).fill(null).map((_, idx) => idx + 1))
const fromIndex = ref<number>()
const toIndex = ref<number>()

function click(index: number) {
  if (fromIndex.value == null) {
    fromIndex.value = index
  } else {
    toIndex.value = index
    done()
  }
}

function done() {
  move(arr.value, fromIndex.value, toIndex.value)
  fromIndex.value = null
  toIndex.value = null
}

</script>
