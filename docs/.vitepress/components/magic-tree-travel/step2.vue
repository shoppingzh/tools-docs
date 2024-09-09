<template>
  <div>
    <ElTree
      :data="context"
      node-key="id"
      default-expand-all
      :props="{ label: 'name' }">
      <template #default="{ node, data }">
        <div class="px-2 w-full" :class="{ 'bg-blue-800 text-white': currentNode === data }">{{ data.name }}</div>
      </template>
    </ElTree>

    
    <Teleport v-if="menuEl" :to="menuEl">
      <div>
        <ElButton :disabled="running" class="block w-full" @click="go('dfs-pre')">深度优先遍历(先序)</ElButton>
      </div>
      <div class="mt-4">
        <ElButton :disabled="running" class="block w-full" @click="go('dfs-post')">深度优先遍历(后序)</ElButton>
      </div>
      <div class="mt-4">
        <ElButton :disabled="running" class="block w-full" @click="go('bfs')">广度优先遍历</ElButton>
      </div>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue';
import { Node, injectKey } from './data';
import { ElButton, ElTable, ElTableColumn, ElTree } from 'element-plus';
import { traverse } from '@shoppingzh/tools/lib/tree'

const { context, next, menuEl } = inject<{
  context: Ref<Node[]>,
  next: (ctx: any) => any,
  menuEl: Ref<HTMLElement>,
}>(injectKey)
const currentNode = ref<Node>()
const running = ref(false)

function go(strategy: any) {
  running.value = true
  const nodes: Node[] = []
  traverse(context.value, (node) => {
    nodes.push(node)
  }, strategy)
  let timer
  timer = setInterval(() => {
    if (!nodes.length) {
      currentNode.value = null
      running.value = false
      return clearInterval(timer)
    }
    currentNode.value = nodes.shift()
  }, 500)
}
</script>

<style scoped lang="postcss">
:deep(.el-tree-node__content) {
  @apply h-[40px];
}
</style>