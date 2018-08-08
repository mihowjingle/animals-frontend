<template>
  <sui-modal size="mini" v-model="show" :closable="false"> <!-- TODO play around with different animations -->
    <sui-modal-header>
      Delete animal {{ animal.name }}?
    </sui-modal-header>
    <sui-modal-content>
      <p>
        This operation is irreversible!
      </p>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button @click="cancel">Cancel</sui-button>
      <sui-button negative @click="deleteAnimal" @keyup.enter="deleteAnimal">Delete</sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
  import { animalClient } from "../rest/animal-client";
  import { modals } from "../animals/modals";
  import { Animal } from "../animals/animal";
  import SuiModal from "semantic-ui-vue/dist/commonjs/modules/Modal/Modal";
  import SuiModalHeader from "semantic-ui-vue/dist/commonjs/modules/Modal/ModalHeader";
  import SuiModalContent from "semantic-ui-vue/dist/commonjs/modules/Modal/ModalContent";
  import SuiModalActions from "semantic-ui-vue/dist/commonjs/modules/Modal/ModalActions";
  import SuiButton from "semantic-ui-vue/dist/commonjs/elements/Button/Button";

  export default {
    name: "DeleteAnimal",
    components: {
      SuiModalActions,
      SuiModalContent,
      SuiModalHeader,
      SuiModal,
      SuiButton
    },
    data() {
      return {
        show: false,
        animal: new Animal()
      };
    },
    methods: {
      deleteAnimal() {
        animalClient.delete(this.animal.id).then((response) => {
          this.$emit('success', response);
          this.show = false;
        });
      },
      cancel() {
        this.show = false;
      }
    },
    created() {
      modals.$on('beginDeletingAnimal', (animal) => {
        this.animal = animal;
        this.show = true;
      });
    }
  }
</script>

<style scoped>

</style>

