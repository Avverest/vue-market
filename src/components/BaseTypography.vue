<template>
  <component :is="props.variant || 'p'">
    <slot></slot>
  </component>
</template>

<script setup>
const props = defineProps({
  variant: String,
})
</script>

<style scoped>

</style>