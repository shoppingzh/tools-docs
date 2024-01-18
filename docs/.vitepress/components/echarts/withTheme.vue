<template>
  <div ref="el" class="h-[300px]" />

  <div class="text-center">
    <ElButton type="primary" link @click="popper.settings = true">配置主题</ElButton>
  </div>

  <ElDrawer v-model="popper.settings" title="配置主题" size="35%" append-to-body modal-class="bg-[#000]/5">
    <ElTabs v-model="(value1 as any)" tab-position="left">
      <ElTabPane v-for="item in tabs1" :key="(item.value as any)" :name="(item.value as any)" :label="item.label" class="px-4">
        <template v-if="value1 === 'axis'">
          <ElRadioGroup v-model="value2">
            <ElRadio v-for="item in tabs2" :key="(item.value as string)" :label="item.value">{{ item.label }}</ElRadio>
          </ElRadioGroup>
          <ElForm class="mt-4">
            <ElFormItem label="文字颜色">
              <ElColorPicker v-model="(axis.axisLabel.color as any)" />
            </ElFormItem>
            <ElFormItem label="文字大小">
              <ElInputNumber v-model="(axis.axisLabel.fontSize as any)" />
            </ElFormItem>
            <ElFormItem label="轴线颜色">
              <ElColorPicker v-model="(axis.axisLine.lineStyle.color as any)" />
            </ElFormItem>
          </ElForm>
        </template>
      </ElTabPane>
    </ElTabs>
  </ElDrawer>
</template>

<script setup lang="ts">
import { Theme, withTheme } from '@shoppingzh/tools/lib/echarts'
import { random } from 'lodash';
import useChart from 'magic-hooks/lib/useChart'
import useSelect from 'magic-hooks/lib/useSelect'
import { computed, onMounted, reactive } from 'vue';

const dimensions = ['安徽省', '广东省', '北京市', '上海市', '陕西省', '辽宁省']
const barData = dimensions.map(o => random(0, 1000))
const lineData = dimensions.map(o => random(0, 1000))
const popper = reactive({
  settings: false,
})

const theme = reactive<Theme>({
  axis: {
    category: {
      axisLabel: {
        color: 'orange',
        fontSize: 14,
      },
      axisLine: {
        lineStyle: {
        }
      }
    },
    value: {
      axisLabel: {
        color: 'red',
        fontSize: 12,
      },
      axisLine: {
        lineStyle: {
          
        }
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
const { activeValue: value1, items: tabs1 } = useSelect({
  items: [{
    value: 'axis',
    label: '坐标轴',
  }, {
    value: 'series',
    label: '图表系列'
  }],
  autoSelect: true,
})
const { activeValue: value2, items: tabs2 } = useSelect({
  items: [{
    value: 'category',
    label: '分类轴'
  }, {
    value: 'value',
    label: '值轴',
  }],
  autoSelect: true,
})
const axis = computed(() => theme.axis[value2.value as keyof Theme['axis']])



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
      data: barData,
    }, {
      type: 'line',
      data: lineData,
    }],
    tooltip: {},
  }, theme)
})

const { el } = useChart({
  option,
})

</script>
