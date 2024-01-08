<script setup lang="ts">
import {ref, watch} from "vue";
import Container from "@/layouts/Container.vue";
import Button from "@/components/ui/Button.vue";
import useGlobalModal from "@/hooks/useGlobalModal";
import useModal from "@/hooks/useModal";
import ModalSet from "@/components/ui/modals/ModalSet.vue";

const rightMenu = useGlobalModal('rightMenu')

const setModal = useModal()

const isSetChecked = ref(true)
const setsId = ref('set')

watch(isSetChecked, () => isSetChecked.value ? setsId.value = 'set' : setsId.value = '')

</script>

<template>
  <Container>
    <ul style="display: flex; flex-direction: column; gap: 10px">

      <li>
        <Button @click="rightMenu.open" primary>Открыть правое меню</Button>
      </li>

      <li>
        <Button @click="setModal.open" primary>Open modals set</Button>
        <label>
          Показывать в режиме одного модального окна
          <input type="checkbox" v-model="isSetChecked">
        </label>
      </li>
    </ul>
    <div style="height: 150vh"/>
  </Container>
  <ModalSet v-model:is-open="setModal.isVisible.value" :connect-id="setsId"/>
</template>

<style lang="scss" scoped>
@import "@/styles/pages/home-page.scss";
</style>