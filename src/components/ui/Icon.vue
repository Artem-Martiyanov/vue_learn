<script setup lang="ts">
interface Props {
  name: string,
  width: number,
  height: number
}

const props = defineProps<Props>()
</script>

<template>
  <svg :width="props.width" :height="props.height">
    <use :href="`@/assets/stack.svg#${props.name}`"/>
  </svg>
</template>

<style lang="scss" scoped>
</style>

