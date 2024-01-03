<script setup lang="ts">
import SimpleModalTemplate from "@/components/ui/modals/templates/SimpleModalTemplate.vue";
import {defineModel} from "vue";
import Button from "@/components/ui/Button.vue";
import useModal from "@/hooks/useModal";

interface Props {
  connectId?: string
}

const props = defineProps<Props>()

const isOpen = defineModel('isOpen')

const modalTypeOne = useModal()

</script>

<template>
  <SimpleModalTemplate v-model:is-open="isOpen" :connect-id="connectId">
    <h3>ModalSet type 2</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex explicabo laudantium nulla odio repellendus
      temporibus. Ipsa labore provident qui sunt vero? Animi asperiores consectetur delectus doloremque, earum eius esse
      illo illum in inventore iusto, labore, provident sint tempora voluptate.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consequatur corporis cupiditate delectus
      distinctio dolorem ducimus error eum expedita laboriosam maiores, nostrum obcaecati omnis rem repellat
      reprehenderit rerum voluptas.
    </p>
    <Button @click="modalTypeOne.open" primary>Open next modal</Button>
  </SimpleModalTemplate>

  <SimpleModalTemplate v-model:is-open="modalTypeOne.isVisible.value" :connect-id="connectId">
    <h3>Modal type 3</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    <Button @click="() => modalTypeOne.close(() => isOpen = false)" secondary>Exit</Button>
  </SimpleModalTemplate>
</template>