<template>
  <div class="flex">
    <div class="flex-1 shrink-0">
      <ElTable :data="list">
        <ElTableColumn label="code" align="center">
          <template #default="{ row }">
            <ElInput v-model="row.code" />
          </template>
        </ElTableColumn>
        <ElTableColumn label="name" align="center">
          <template #default="{ row }">
            <ElInput v-model="row.name" />
          </template>
        </ElTableColumn>
        <ElTableColumn label="pcode" align="center">
          <template #default="{ row }">
            <ElInput v-model="row.pcode" />
          </template>
        </ElTableColumn>
      </ElTable>
    </div>
    <div class="px-1 flex items-center">
      <el-icon class="text-[28px] text-gray-400"><CaretRight /></el-icon>
    </div>
    <div class="flex-1 shrink-0">
      <ElTree :data="nodes" :default-expand-all="true" node-key="code" :props="{ label: 'name' }" class="h-full bg-gray-100 dark:bg-neutral-900"></ElTree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { parseFromList } from '@shoppingzh/tools/lib/tree'
import { cloneDeep } from 'lodash';

interface Node {
  code: string
  pcode?: string
  name: string
}

const initialNodes: Node[] = [
  {
    code: '1',
    name: '1'
  },
  {
    code: '2',
    name: '2'
  },
  {
    code: '3',
    name: '3'
  },
  {
    code: '1-1',
    name: '1-1',
    pcode: '1'
  },
  {
    code: '1-2',
    name: '1-2',
    pcode: '1'
  },
  {
    code: '3-1',
    name: '3-1',
    pcode: '3'
  },
  {
    code: '1-2-1',
    name: '1-2-1',
    pcode: '1-2'
  },
  {
    code: '1-2-1-1',
    name: '1-2-1-1',
    pcode: '1-2-1'
  }
]

const list = ref<Node[]>(initialNodes)
const nodes = computed(() => parseFromList(cloneDeep(list.value), {
  id: o => o.code && o.code.trim() ? o.code : null,
  pid: o => o.pcode && o.pcode.trim() ? o.pcode : null,
}))
</script>
