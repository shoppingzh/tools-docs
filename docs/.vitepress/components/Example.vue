<template>
  <div class="relative p-4 pt-10 border border-gray-200 shadow-sm rounded-md overflow-hidden
    transition-all duration-300
    dark:border-gray-700
    hover:shadow-2xl hover:translate-x-[-3px] hover:translate-y-[-3px]">
    <div class="absolute left-0 top-0 inline-block bg-teal-500 py-1 px-4 text-white text-xs rounded-br">
      <span>试一试</span>
    </div>
    <div class="example__inner">
      <ClientOnly>
        <slot />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
