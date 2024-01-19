<template>
  <ElForm :model="model" label-width="120">
    <ElFormItem label="日期/时间类型">
      <ElSelect v-model="model.type">
        <ElOption v-for="item in types" :key="item.value" :value="item.value" :label="item.label" />
      </ElSelect>
    </ElFormItem>
    <ElFormItem label="范围">
      <ElDatePicker
        type="datetimerange"
        v-model="model.range" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" :disabled="!prepared" @click="done()">算一下</ElButton>
    </ElFormItem>
  </ElForm>

  <ElDialog
    v-model="popper.result"
    title="结果"
    width="600"
    append-to-body>
    <ElForm>
      <ElFormItem label="格式化到毫秒">
        <ElSwitch v-model="allFormat" />
      </ElFormItem>
    </ElForm>
    <div class="flex flex-wrap max-h-[300px] overflow-auto">
      <div
        v-for="(date, index) in viewDates"
        :key="index"
        class="w-1/3 shrink-0">
        {{ dayjs(date).format(format) }}
      </div>
    </div>
    <div v-if="dates.length > 500" class="mt-4 text-center text-xs text-gray-400">
      最多显示前500个(当前 <span class="text-blue-500">{{ dates.length }}</span> 个)，更多请在控制台查看
    </div>
  </ElDialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { getBetweenDates, Type } from '@shoppingzh/tools/lib/datetime'
import dayjs from 'dayjs'

const types = [
  { value: 'year', label: '年' },
  { value: 'month', label: '月' },
  { value: 'week', label: '周' },
  { value: 'day', label: '日' },
  { value: 'hour', label: '时' },
  { value: 'minute', label: '分' },
  { value: 'second', label: '秒' },
]

const model = reactive({
  type: 'day',
  range: [dayjs('2024-01-16 12:00:00').toDate(), dayjs('2024-05-01 09:00:00').toDate()] as [Date, Date],
})
const allFormat = ref(false)
const format = computed(() => {
  if (allFormat.value) return 'YYYY-MM-DD HH:mm:ss.SSS'
  return ({
    year: 'YYYY',
    month: 'YYYY-MM',
    week: 'YYYY-MM',
    day: 'YYYY-MM-DD',
    hour: 'YYYY-MM-DD HH',
    minute: 'YYYY-MM-DD HH:mm',
    second: 'YYYY-MM-DD HH:mm:ss',
  })[model.type]
})
const dates = ref<Date[]>([])
const viewDates = computed(() => dates.value.slice(0, 500))
const popper = reactive({
  result: false,
})

const prepared = computed(() => model.type && model.range[0] && model.range[1])

function done() {
  dates.value = getBetweenDates(model.range[0], model.range[1], model.type as Type)
  console.log(dates.value)
  popper.result = true
}
</script>
