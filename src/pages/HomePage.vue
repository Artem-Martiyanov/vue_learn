<script setup lang="ts">
import {ref} from "vue";
import ConfirmModal from "@/components/ui/modals/ConfirmModal.vue";
import Container from "@/layouts/Container.vue";
import SideModal from "@/components/ui/modals/base/SideModal.vue";

const isModalVisible = ref(false)
const isSideModalVisible = ref(false)
const isTextRed = ref(false)

const openModal = () => isModalVisible.value = true
const openSideModal = () => isSideModalVisible.value = true
const toggleTextColor = () => isTextRed.value = !isTextRed.value


</script>

<template>
  <Container>
    <div class="text" :class="{'text--red': isTextRed}">
      Lorem ipsum dolor sit amet, consectetur
      <br>
      adipisicing elit. Adipisci, ea, obcaecati! Omnis, provident suscipit.
    </div>


    <button @click="openModal">Сменить цвет текста</button>
    <button @click="openSideModal">Открыть меню</button>

    <div style="height: 150vh"></div>

    <ConfirmModal
        v-model:is-open="isModalVisible"
        title="Это модальное окно подтверждения"
        text="Это текст модального окна"
        button-text="Подтвердить"
        @on-confirm="toggleTextColor"
    />



      <SideModal
      v-model:is-open="isSideModalVisible"
      />





  </Container>
</template>

<style lang="scss" scoped>
@import "@/styles/pages/home-page.scss";
</style>