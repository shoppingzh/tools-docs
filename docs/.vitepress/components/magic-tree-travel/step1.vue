<template>
  <div>
    <ElTable :data="context">
      <ElTableColumn label="地区" prop="name" />
      <ElTableColumn label="id" prop="id" />
      <ElTableColumn label="pid" prop="pid" />
    </ElTable>

    <Teleport v-if="menuEl" :to="menuEl">
      <ElButton type="primary" class="px-6" @click="parse()">转成树</ElButton>
    </Teleport>

    <Teleport v-if="tipsEl" :to="tipsEl">
      <div class="text-lg">欢迎来到树的奇妙之旅！</div>
      <div class="mt-2">
        <div>在第一关中，你拿到了一个普通的列表，这个列表中的每条记录都维护了一个自己的ID与其父节点的ID。</div>
        <div>目前看来，它们还是杂乱无序的，点击下方按钮，让它们恢复“真身”。</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue';
import { FlatNode, } from './data';
import { ElButton, ElTable, ElTableColumn } from 'element-plus';
import { parseFromList } from '@shoppingzh/tools/lib/tree'
import { Inject, injectKey } from './inject';

const { context, next, tipsEl, menuEl, call, } = inject<Inject<Ref<FlatNode[]>>>(injectKey)

async function parse() {
  const treeNodes = await call(parseFromList, context.value)
  next(treeNodes)
}
</script>
