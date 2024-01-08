<script setup lang="ts">
import {ref, watch} from "vue";
import Container from "@/layouts/Container.vue";
import Button from "@/components/ui/Button.vue";
import useGlobalModal from "@/hooks/useGlobalModal";
import useModal from "@/hooks/useModal";
import ModalSet from "@/components/ui/modals/ModalSet.vue";
import SimpleModalWithoutBg from "@/components/ui/modals/SimpleModalWithoutBg.vue";

const rightMenu = useGlobalModal('rightMenu')

const setModal = useModal()

const isSetChecked = ref(true)
const setsId = ref('set')


const firstModal = useModal()
const secondModal = useModal()
const thirdModal = useModal()

const fourthModal = useModal()
const fiveModal = useModal()


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


      <li>
        <h3>Кнопки первой группы</h3>
        <Button @click="firstModal.open" primary>Первое окно</Button>
        <Button @click="secondModal.open" primary>Второе окно</Button>
        <Button @click="thirdModal.open" primary>Третье окно</Button>
      </li>
      <li>
        <h3>Кнопки второй группы</h3>
        <Button @click="fourthModal.open" primary>Первое окно(2)</Button>
        <Button @click="fiveModal.open" primary>Второе окно(2)</Button>
      </li>
    </ul>
    <div style="height: 150vh"/>
  </Container>
  <ModalSet v-model:is-open="setModal.isVisible.value" :connect-id="setsId"/>

  
  <SimpleModalWithoutBg 
      v-model:is-open="firstModal.isVisible.value"
      title="Первое окно" 
      content="Первая группа"
      connect-id="first-group"
  />

  <SimpleModalWithoutBg
      v-model:is-open="secondModal.isVisible.value"
      title="Второе окно"
      content="Первая группа"
      connect-id="first-group"
      offset="40px"

  />

  <SimpleModalWithoutBg
      v-model:is-open="thirdModal.isVisible.value"
      title="Третье окно"
      content="Первая группа"
      connect-id="first-group"
      offset="100px"
  />
  
  
  

  <SimpleModalWithoutBg
      v-model:is-open="fourthModal.isVisible.value"
      title="Перове окно(2)"
      content="Вторая группа"
      connect-id="second-group"
      offset="-50px"
  />

  <SimpleModalWithoutBg
      v-model:is-open="fiveModal.isVisible.value"
      title="Второе окно(2)"
      content="Вторая группа"
      connect-id="second-group"
      offset="-100px"
  />

</template>

<style lang="scss" scoped>
@import "@/styles/pages/home-page.scss";
</style>