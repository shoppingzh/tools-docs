<template>
  <TransitionGroup name="list" tag="div">
    <slot />
  </TransitionGroup>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
:deep(.list) {
  &-enter-from, &-leave-to {
    @apply opacity-0 translate-y-[100%];
  }
  &-enter-active, &-leave-active {
    @apply transition-all duration-500;
  }
}
</style>
