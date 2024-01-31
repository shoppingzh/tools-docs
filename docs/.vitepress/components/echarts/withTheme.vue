<template>
  <div>
    <div ref="el" class="mt-2 h-[300px]" />
    <div ref="el2" class="mt-2 h-[300px]"></div>
  </div>
</template>

<script setup lang="ts">
import { withTheme, Theme } from '@shoppingzh/tools/lib/echarts'
import { useIntervalFn } from '@vueuse/core';
import { random } from 'lodash';
import useChart from 'magic-hooks/lib/useChart'
import useSelect from 'magic-hooks/lib/useSelect'
import { computed, onMounted, reactive, ref } from 'vue';
import theme from './theme.json'

const dimensions = ['安徽省', '广东省', '北京市', '上海市', '陕西省', '辽宁省']
function generateData() {
  return dimensions.map(o => ({ name: o, value: random(0, 1000) }))
}
const barData = ref(generateData())
const lineData = ref(generateData())
const pieData = ref(generateData())

const option = computed(() => {
  const option = withTheme({
    title: [{
      text: '标题一',
    }, {
      text: '标题二',
      right: 0,
    }],
    xAxis: {
      type: 'category',
      data: dimensions,
    },
    yAxis: {
      type: 'value',
    },
    legend: [{
      type: 'plain',
    }, {
      type: 'scroll',
      top: 50,
      right: 0,
      height: 100,
      orient: 'vertical',
    }],
    series: [{
      type: 'bar',
      data: barData.value,
    }, {
      type: 'line',
      data: lineData.value,
    }],
    tooltip: {},
  }, theme)
  return option
})

const { el } = useChart({
  option,
})
const { el: el2 } = useChart({
  option: computed(() => withTheme({
    series: [{
      type: 'pie',
      data: pieData.value,
      radius: [20, 85],
      right: 0,
      top: 0,
    }]
  }, theme))
})

useIntervalFn(() => {
  barData.value = generateData()
  lineData.value = generateData()
  pieData.value = generateData()
}, 3000)

</script>
