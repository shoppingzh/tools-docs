<template>
  <ElTree
    :data="context"
    node-key="id"
    default-expand-all
    :props="{ label: 'name' }">
    <template #default="{ node, data }">
      <div class="px-2 py-2 w-full" :class="{ 'bg-green-500 text-white': currentNode === data }">
        {{ data.name }}
      </div>
    </template>
  </ElTree>
  <Teleport v-if="tipsEl" :to="tipsEl">
    <div>欢迎来到第三关！</div>
    <div>这一关，我们来找节点。</div>
    <div>有了遍历的基础，找起节点起来应该不是件难事，让我们一起来找一找吧！</div>

    <div class="mt-4">(你可以试一下会命中多个节点的关键词，不同的遍历结果可能会返回不同的节点！)</div>
  </Teleport>
  <Teleport v-if="menuEl" :to="menuEl">
    <ElForm label-width="100">
      <ElFormItem label="关键词">
        <ElInput v-model="model.name" />
      </ElFormItem>
      <ElFormItem label="遍历方法">
        <!-- <ElSelect v-model="model.strtegy">
          <ElOption v-for="item in strategies" :key="item.value" :value="item.value" :label="item.label" />
        </ElSelect> -->
        <ElRadioGroup v-model="model.strtegy">
          <ElRadio v-for="item in strategies" :key="item.value" :value="item.value" :label="item.label" />
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem>
        <ElButton :disabled="!model.name?.trim()" class="px-6" @click="handleFind">查找</ElButton>
        <ElButton @click="handleFindLeaf">快速找第一个叶子结点</ElButton>
      </ElFormItem>
    </ElForm>

    <div class="px-6 mt-6 text-right">
      <ElButton type="primary" link class="px-6" @click="next(context)">下一关</ElButton>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { inject, reactive, ref, Ref } from 'vue';
import { Inject, injectKey } from './inject';
import { Node } from './data';
import { find, findFirstLeaf, } from '@shoppingzh/tools/lib/tree'
import { ElMessage, ElMessageBox } from 'element-plus';

const { context, tipsEl, menuEl, call, next,  } = inject<Inject<Ref<Node[]>>>(injectKey)
const strategies = [
  { value: 'dfs-pre', label: '深度优先 - 先序遍历', },
  { value: 'dfs-post', label: '深度优先 - 后序遍历', },
  { value: 'bfs', label: '广度优先遍历', },
]
const model = reactive({
  name: '望',
  strtegy: 'dfs-pre',
})
const currentNode = ref<Node>()

function found(node: Node) {
  if (!node) {
    return ElMessage.error('没找到')
  }
  currentNode.value = node
}

async function handleFind() {
  const node = await call(find, context.value, node => node.name.indexOf(model.name) >= 0, model.strtegy)
  found(node) 
}

async function handleFindLeaf() {
  const node = await call(findFirstLeaf, context.value)
  found(node)
}
</script>
