<template>
  <!-- <div ref="el" class="w-full h-[500px] border border-gray-200" /> -->
  <Teleport to="body">
    <div ref="el" class="fixed inset-0 pointer-events-none z-[9999999]" />
  </Teleport>
  <ElForm :model="options" label-width="120">
    <ElFormItem label="文字">
      <ElInput v-model="text" />
    </ElFormItem>
    <ElFormItem label="字体">
      <ElInput v-model="options.fontFamily" />
    </ElFormItem>
    <ElFormItem label="字体大小">
      <ElInputNumber v-model="options.textSize" :step="6" />
    </ElFormItem>
    <ElFormItem label="文字颜色">
      <ElColorPicker v-model="options.textColor" show-alpha />
    </ElFormItem>
    <ElFormItem label="文字加粗">
      <ElSwitch v-model="options.fontBold" />
    </ElFormItem>
    <ElFormItem label="文字倾斜">
      <ElSwitch v-model="options.fontItalic" />
    </ElFormItem>
    <ElFormItem label="旋转角度">
      <ElInputNumber v-model="options.rotate" :step="15" />
    </ElFormItem>
    <ElFormItem label="背景色">
      <ElColorPicker v-model="options.bgColor" show-alpha />
    </ElFormItem>
    <ElFormItem label="间距(X轴)">
      <ElInputNumber v-model="paddingX" :step="10" />
    </ElFormItem>
    <ElFormItem label="间距(Y轴)">
      <ElInputNumber v-model="paddingY" :step="10" />
    </ElFormItem>
  </ElForm>
</template>

<script setup lang="ts">
import { ElColorPicker, ElForm, ElFormItem, ElInput, ElInputNumber, ElSwitch } from 'element-plus';
import { createWatermark, CreateWatermarkOptions } from '@shoppingzh/tools/lib/dom'
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { debounce } from 'lodash'

const el = ref()

const text = ref('createWatermark')
const options = reactive<CreateWatermarkOptions>({
  textSize: 16,
  rotate: -15,
  padding: [200, 200],
})
const paddingX = computed({
  get() {
    return options.padding[0]
  },
  set(newVal) {
    options.padding[0] = newVal
  }
})
const paddingY = computed({
  get() {
    return options.padding[1]
  },
  set(newVal) {
    options.padding[1] = newVal
  }
})

function render() {
  createWatermark(el.value, text.value, options)
}

onMounted(() => {
  render()
})

watch([text, options], debounce(render, 1000))

</script>
