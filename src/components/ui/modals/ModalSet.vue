<script setup lang="ts">
import SimpleModalTemplate from "@/components/ui/modals/templates/SimpleModalTemplate.vue";
import {defineModel, watch} from "vue";
import Button from "@/components/ui/Button.vue";
import ModalSetType2 from "@/components/ui/modals/ModalSetType2.vue";
import useModal from "@/hooks/useModal";

interface Props {
  connectId?: string
}

const props = defineProps<Props>()

const isOpen = defineModel('isOpen')

const typeTwoModal = useModal()

watch(typeTwoModal.isVisible, () => {
  if (!typeTwoModal.isVisible.value) {
    isOpen.value = false
  }
})

</script>

<template>
  <SimpleModalTemplate v-model:is-open="isOpen" :connect-id="connectId">
    <h3>ModalSet type 1</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa dolore dolorem doloremque, eius, et
      fuga id iure iusto labore obcaecati officia officiis recusandae, sapiente sint unde ut! Illum, nobis.
    </p>
    <Button @click="typeTwoModal.open" primary>Open next modal</Button>
  </SimpleModalTemplate>
  <ModalSetType2 v-model:is-open="typeTwoModal.isVisible.value" :connect-id="connectId"/>
</template>