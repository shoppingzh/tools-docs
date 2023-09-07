<template>
  <div class="w-full h-[400px] relative border border-gray-300">
    <div class="px-2 w-full h-full overflow-auto relative text-sm" v-html="html" />

    <div ref="el" class="absolute pointer-events-none inset-0 z-[10]" />
  </div>
</template>

<script setup lang="ts">
import { createWatermark } from '@shoppingzh/tools/lib/dom'
import { computed, onMounted, ref } from 'vue';

const el = ref()
const text = ref(`
君不见，黄河之水天上来，奔流到海不复回。

君不见，高堂明镜悲白发，朝如青丝暮成雪。

人生得意须尽欢，莫使金樽空对月。

天生我材必有用，千金散尽还复来。

烹羊宰牛且为乐，会须一饮三百杯。

岑夫子，丹丘生，将进酒，杯莫停。

与君歌一曲，请君为我倾耳听。

钟鼓馔玉不足贵，但愿长醉不复醒。

古来圣贤皆寂寞，惟有饮者留其名。

陈王昔时宴平乐，斗酒十千恣欢谑。

主人何为言少钱，径须沽取对君酌。

五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。
`)

const html = computed(() => {
  return text.value.split(/\r?\n+/g).map(o => `<p>${o}</p>`).join('')
})

function render() {
  createWatermark(el.value, '涉 密 内 容', {
    // bgColor: 'rgba(0, 0, 0, .3)',
    textColor: 'rgba(0, 0, 0, .5)',
    rotate: -30,
    // padding: [2, 2],
  })
}

onMounted(render)
</script>
