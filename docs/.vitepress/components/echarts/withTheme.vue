<template>
  <div ref="el" class="h-[300px]" />
</template>

<script setup lang="ts">
import { withTheme } from '@shoppingzh/tools/lib/echarts'
import { random } from 'lodash';
import useChart from 'magic-hooks/lib/useChart'
import { computed, onMounted } from 'vue';

const dimensions = ['安徽省', '广东省', '北京市', '上海市', '陕西省', '辽宁省']

const option = computed(() => {
  return withTheme({
    xAxis: {
      type: 'category',
      data: dimensions,
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      type: 'bar',
      data: dimensions.map(o => random(0, 1000))
    }, {
      type: 'line',
      data: dimensions.map(o => random(0, 1000))
    }],
    tooltip: {},
  }, {
    axis: {
      category: {
        axisLabel: {
          color: 'orange',
        }
      },
      value: {
        axisLabel: {
          color: 'red',
        }
      }
    },
    series: {
      bar: {
        barWidth: 20,
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        }
      },
      line: {
        smooth: true,
      }
    }
  })
})

const { el } = useChart({
  option,
})

</script>
