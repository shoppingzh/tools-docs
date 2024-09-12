<template>
  <div>
    <ElTree
      :data="context"
      node-key="id"
      default-expand-all
      :props="{ label: 'name' }">
      <template #default="{ node, data }">
        <div class="px-2 py-2 w-full" :class="{ 'bg-green-500 text-white': currentNode === data }">
          {{ sorts[data.id] }}
          {{ data.name }}
        </div>
      </template>
    </ElTree>

    <Teleport v-if="tipsEl" :to="tipsEl">
      <div>欢迎来到第二关！</div>
      <div>转眼间，一棵树跃然纸上！接下来，让我们思考一个问题：</div>
      <div>如果让你数完所有节点，你会怎么数？</div>
      <ElDivider />
      <div>数节点这件事就是遍历，树的遍历一般来说有这三种方式：</div>
      <div>1. 深度优先 - 先序遍历：优先到达叶子结点，并先访问父节点，后访问子节点；</div>
      <div>2. 深度优先 - 后序遍历：优先到达叶子结点，并先访问子节点，后访问父节点；</div>
      <div>3. 广度遍历：优先到达父节点，然后逐层遍历，最后到达叶子结点。</div>
      <div class="mt-3">你可以点击下方的按钮试试遍历的实际效果。</div>
    </Teleport>
    
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
      <div class="px-6 mt-6 text-right">
        <ElButton type="primary" link class="px-6" @click="next(context)">下一关</ElButton>
      </div>
    </Teleport>
    

  </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue';
import { Node,  } from './data';
import { ElButton, ElTable, ElTableColumn, ElTree } from 'element-plus';
import { traverse } from '@shoppingzh/tools/lib/tree'
import { Inject, injectKey } from './inject';

const { context, next, tipsEl, menuEl, call, } = inject<Inject<Ref<Node[]>>>(injectKey)
const currentNode = ref<Node>()
const running = ref(false)
const sorts = ref<Record<string, number>>({})

async function go(strategy: any) {
  running.value = true
  const nodes: Node[] = []
  let sort = 0
  await call(traverse, context.value, (node) => {
    nodes.push(node)
    sorts.value[node.id] = ++sort
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
