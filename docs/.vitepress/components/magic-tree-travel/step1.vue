<template>
  <div>
    <ElTable :data="context">
      <ElTableColumn label="地区" prop="name" />
      <ElTableColumn label="id" prop="id" />
      <ElTableColumn label="pid" prop="pid" />
    </ElTable>

    <Teleport v-if="menuEl" :to="menuEl">
      <ElButton class="w-full" @click="parse()">转成树</ElButton>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
import { FlatNode, injectKey } from './data';
import { ElButton, ElTable, ElTableColumn } from 'element-plus';
import { parseFromList } from '@shoppingzh/tools/lib/tree'

const { context, next, menuEl, } = inject<{
  context: Ref<FlatNode[]>,
  next: (ctx: any) => any,
  menuEl: Ref<HTMLElement>
}>(injectKey)

function parse() {
  const treeNodes = parseFromList(context.value)
  next(treeNodes)
}
</script>
