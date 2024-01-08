<script setup lang="ts">
import {defineModel} from "vue";
import WithoutBgTemplate from "@/components/ui/modals/templates/WithoutBgTemplate.vue";

interface Props {
  connectId?: string
  title: string,
  content: string,
  offset?: string
}

const props = defineProps<Props>()

const isOpen = defineModel('isOpen')

</script>

<template>
  <WithoutBgTemplate v-model:is-open="isOpen" :connect-id="connectId" :offset="offset">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </WithoutBgTemplate>
</template>