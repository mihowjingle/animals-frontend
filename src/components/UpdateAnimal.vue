<template>
  <sui-modal size="mini" v-model="show" :closable="false"> <!-- TODO play around with different animations -->
    <sui-modal-header>
      Update animal
    </sui-modal-header>
    <sui-modal-content>
      <sui-form>
        <sui-form-field>
          <label>Name</label>
          <sui-input v-model="animal.name" @keydown.enter.prevent="updateAnimal"></sui-input>
        </sui-form-field>
      </sui-form>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button @click="cancel">Cancel</sui-button>
      <sui-button primary @click="updateAnimal" :disabled="!valid">Update</sui-button>
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
  import SuiInput from "semantic-ui-vue/dist/commonjs/elements/Input/Input";
  import SuiForm from "semantic-ui-vue/dist/commonjs/collections/Form/Form";
  import SuiFormField from "semantic-ui-vue/dist/commonjs/collections/Form/FormField";
  import SuiButton from "semantic-ui-vue/dist/commonjs/elements/Button/Button";

  export default {
    name: "UpdateAnimal",
    components: {
      SuiFormField,
      SuiForm,
      SuiInput,
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
    computed: {
      valid() {
        return this.animal.name.length >= 1;
      }
    },
    methods: {
      updateAnimal() {
        if (this.valid) {
          animalClient.update(this.animal).then((response) => {
            this.$emit('success', response);
            this.show = false;
          });
        }
      },
      cancel() {
        this.show = false;
      }
    },
    created() {
      modals.$on('beginEditingAnimal', (animal) => {
        this.animal = new Animal(animal);
        this.show = true;
      });
    }
  }
</script>

<style scoped>

</style>

