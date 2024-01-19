<template>
  <pre class="p-2 w-full whitespace-pre-wrap overflow-auto bg-gray-50 dark:bg-gray-900">{
    a: undefined,
    b: null,
    c: '你好',
    d: 123,
    e: true,
    f: Symbol(),
    g: BigInt(20),
    h: function() {},
    i: [1, 2, 3, '四'],
    j: {
      ja: 'ja',
      jb: 123,
      jc: [0, 1, 2]
    },
    k: [4, 5, 6, { ka: 7, kb: 8 }]
  }</pre>
  <ElForm>
    <ElFormItem label="URL编码">
      <ElSwitch v-model="form.encode" />
    </ElFormItem>
  </ElForm>

  <div class="mt-4 break-all font-semibold text-blue-600">
    {{ result }}
  </div>
</template>

<script setup lang="ts">
import { createQuerystring } from '@shoppingzh/tools/lib/path'
import { reactive, ref, watch } from 'vue';

const object = {
  a: undefined,
  b: null,
  c: '你好',
  d: 123,
  e: true,
  f: Symbol(),
  g: BigInt(20),
  h: function() {},
  i: [1, 2, 3, '四'],
  j: {
    ja: 'ja',
    jb: 123,
    jc: [0, 1, 2]
  },
  k: [4, 5, 6, { ka: 7, kb: 8 }]
}
const form = reactive({
  encode: false,
})
const result = ref('')

function done() {
  result.value = createQuerystring(object, {
    encode: form.encode,
  })
}

watch(form, done, { immediate: true, deep: true })
</script>
