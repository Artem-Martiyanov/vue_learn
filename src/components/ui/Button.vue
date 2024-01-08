<script setup lang="ts">
import Icon from "@/components/ui/Icon.vue";

interface Props {
  rounded?: boolean,
  disabled?: boolean,
  primary?: boolean,
  secondary?: boolean,
  leftIcon?: {
    width: number,
    height: number,
    name: string,
  },
  rightIcon?: {
    width: number,
    height: number,
    name: string,
  },
  centerIcon?: {
    width: number,
    height: number,
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
  'button--primary': props.primary,
  'button--secondary': props.secondary,
  'button--rounded': props.rounded,
  'button--disabled': props.disabled,
}

</script>

<template>
  <button
      class="button"
      :style="variables"
      :class="classes"
      :disabled="props.disabled"
  >
    <Icon
        class="button__icon button__icon--left"
        :name="leftIcon.name"
        :height="leftIcon.height"
        :width="leftIcon.width"
        v-if="leftIcon"
    />
    <slot name="icon-left" v-else/>
    <Icon
        class="button__icon"
        :name="centerIcon.name"
        :height="centerIcon.height"
        :width="centerIcon.width"
        v-if="centerIcon"
    />
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