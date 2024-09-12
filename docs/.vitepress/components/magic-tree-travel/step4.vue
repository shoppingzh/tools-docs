<template>
  <ElTree
    :data="nodes"
    node-key="id"
    default-expand-all
    :props="{ label: 'name' }">
    <template #default="{ node, data }">
      <div class="px-2 py-2 w-full">
        {{ data.name }}
      </div>
    </template>
  </ElTree>
  <Teleport v-if="tipsEl" :to="tipsEl">
    <div>欢迎来到第四关！</div>
    <div>这一关，我们来学习剪枝。</div>
    <div>所谓剪枝，就是把树中的某些节点删除掉，以清理树。</div>

  </Teleport>
  <Teleport v-if="menuEl" :to="menuEl">
    <ElForm label-width="100">
      <ElFormItem label="关键词">
        <ElSelect
          v-model="model.keywords"
          allow-create
          filterable
          multiple />
      </ElFormItem>
      <ElFormItem>
        <ElButton :disabled="!model.keywords?.length" class="px-6" @click="handlePrune">开始剪枝</ElButton>
        <ElButton class="px-6" @click="handleReset">剪错了！恢复</ElButton>
      </ElFormItem>
      <ElFormItem>
        <ElButton class="px-4" @click="handleFastPrune">快速减除没有区县的城市</ElButton>
        <ElButton class="px-2" @click="handleFastPruneLeaves">减除所有叶子节点</ElButton>
      </ElFormItem>
    </ElForm>

    <!-- <div class="px-6 mt-6 text-right">
      <ElButton type="primary" link class="px-6" @click="next(context)">下一关</ElButton>
    </div> -->
  </Teleport>
</template>

<script setup lang="ts">
import { inject, reactive, ref, Ref } from 'vue';
import { Inject, injectKey } from './inject';
import { Node } from './data';
import { prune } from '@shoppingzh/tools/lib/tree'
import { cloneDeep } from 'lodash';

const { context, tipsEl, menuEl, call, next,  } = inject<Inject<Ref<Node[]>>>(injectKey)
const model = reactive({
  keywords: [],
})
const nodes = ref(cloneDeep(context.value))

async function handlePrune() {
  call(prune, nodes.value, node => {
    return model.keywords.some(keyword => node.name.indexOf(keyword) >= 0)
  })
}

function handleReset() {
  nodes.value = cloneDeep(context.value)
}

function handleFastPrune() {
  call(prune, nodes.value, (node, parent, depth) => {
    return depth === 2 && !node.children?.length
  })
}

function handleFastPruneLeaves() {
  call(prune, nodes.value, (node) => {
    return !node.children?.length
  })
}

</script>
