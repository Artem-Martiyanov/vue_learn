<script setup lang="ts">
import {getStackIcon} from "@/utils/utils";

interface Props {
  name: string,
  width: number,
  height: number
}

const props = defineProps<Props>()

</script>

<template>
  <svg class="icon" :width="props.width" :height="props.height">
    <use :href="`${getStackIcon(props.name)}`"/>
  </svg>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/icon.scss";
</style>

