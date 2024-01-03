<script setup lang="ts">
import Icon from "@/components/ui/Icon.vue";

interface Props {
  rounded?: boolean,
  leftIcon?: {
    width: string,
    height: string,
    name: string,
  },
  rightIcon?: {
    width: string,
    height: string,
    name: string,
  },
  width?: string,
  height?: string,
  hiddenText?: string
}

const props = defineProps<Props>()

const variables = {
  '--width': props.width,
  '--height': props.height,
}

const classes = {
  'button--rounded': props.rounded
}

</script>

<template>
  <button
      class="button"
      :style="variables"
      :class="classes"
  >
    <Icon
        class="button__icon button__icon--left"
        :name="leftIcon.name"
        :height="leftIcon.height"
        :width="leftIcon.width"
        v-if="leftIcon"
    />
    <slot name="icon-left" v-else/>
    <slot/>
    <Icon
        class="button__icon button__icon--right"
        :name="rightIcon.name"
        :height="rightIcon.height"
        :width="rightIcon.width"
        v-if="rightIcon"
    />
    <slot v-else name="icon-right"/>
    <span class="visually-hidden">{{ hiddenText }}</span>
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/components/ui/button.scss";
</style>