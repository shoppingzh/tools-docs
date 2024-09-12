<template>
  <ElDialog
    v-model="show"
    width="90%"
    top="2%"
    title="树的奇妙之旅"
    class="h-[90%]">
    <Travel v-if="show" />
  </ElDialog>

  <ElButton type="primary" @click="play">再玩一次</ElButton>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, ref } from 'vue';
import Travel from './Travel.vue';

const show = ref(false)

function play() {
  show.value = true
}

play()
</script>
