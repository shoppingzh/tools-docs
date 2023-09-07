<template>
  <div class="flex items-center">
    <div class="flex-1">
      <ElForm label-width="60">
        <ElFormItem label="数值">
          <ElInputNumber v-model="form.value" placeholder="输入数值" :controls="false" class="w-full" />
        </ElFormItem>
        <ElFormItem label="小数位">
          <ElInputNumber v-model="form.fraction" controls-position="right" class="w-full" />
        </ElFormItem>
        <ElFormItem label="千分位">
          <ElSwitch v-model="form.thousandth" />
        </ElFormItem>
      </ElForm>
    </div>
    <div class="flex-1 text-center text-2xl font-semibold truncate tracking-wide">
      <span :key="formatValue">{{ formatValue }}</span>
      <!-- <Transition name="fade">
      </Transition> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { format } from '@shoppingzh/tools/lib/number'

const form = reactive({
  value: 1234.5678,
  thousandth: false,
  fraction: null,
})
const formatValue = computed(() => format(form.value, form.thousandth, form.fraction))
</script>

<style scoped lang="postcss">
.fade {
  &-enter-from, &-leave-to {
    @apply opacity-0 translate-y-full;
  }
  &-eneter-from {
    /* @apply  */
  }
  &-leave-to {
    @apply absolute scale-0;
  }
  &-enter-active, &-leave-active {
    @apply transition-all duration-500;
  }
}
</style>