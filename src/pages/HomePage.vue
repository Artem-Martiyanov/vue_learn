<script setup lang="ts">
import {ref} from "vue";
import Container from "@/layouts/Container.vue";
import SideModalTemplate from "@/components/ui/modals/templates/SideModalTemplate.vue";
import LeftMenuModal from "@/components/ui/modals/LeftMenuModal.vue";

const isLeftMenuVisible = ref(false)
const isRightSideModalVisible = ref(false)


const openLeftMenu = () => isLeftMenuVisible.value = true
const openRightSideModal = () => isRightSideModalVisible.value = true


</script>

<template>
  <Container>

    <button @click="openLeftMenu">Открыть левое меню</button>

    <button @click="openRightSideModal">Открыть правое меню</button>


    <LeftMenuModal
        v-model:is-open="isLeftMenuVisible"
    />

    <SideModalTemplate
        side="right"
        v-model:is-open="isRightSideModalVisible"
    />

    <div style="height: 150vh"/>
  </Container>
</template>

<style lang="scss" scoped>
@import "@/styles/pages/home-page.scss";
</style>