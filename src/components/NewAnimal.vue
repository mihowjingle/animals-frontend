<template>
  <sui-modal size="mini" v-model="show" :closable="false" animation="drop">
    <sui-modal-header>
      New animal
    </sui-modal-header>
    <sui-modal-content>
      <sui-form>
        <sui-form-field>
          <label>Name</label>
          <sui-input v-model="newAnimalName" @keydown.enter.prevent="saveNewAnimal"></sui-input>
        </sui-form-field>
      </sui-form>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button @click="cancel">Cancel</sui-button>
      <sui-button positive @click="saveNewAnimal" :disabled="!valid">Save</sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
  import { animalClient } from "../rest/animal-client";
  import { modals } from "../animals/modals";
  import SuiModal from "semantic-ui-vue/dist/commonjs/modules/Modal/Modal";
  import SuiModalHeader from "semantic-ui-vue/dist/commonjs/modules/Modal/ModalHeader";
  import SuiModalContent from "semantic-ui-vue/dist/commonjs/modules/Modal/ModalContent";
  import SuiModalActions from "semantic-ui-vue/dist/commonjs/modules/Modal/ModalActions";
  import SuiInput from "semantic-ui-vue/dist/commonjs/elements/Input/Input";
  import SuiForm from "semantic-ui-vue/dist/commonjs/collections/Form/Form";
  import SuiFormField from "semantic-ui-vue/dist/commonjs/collections/Form/FormField";
  import SuiButton from "semantic-ui-vue/dist/commonjs/elements/Button/Button";

  export default {
    name: "NewAnimal",
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
        newAnimalName: '',
        show: false
      }
    },
    computed: {
      valid() {
        return this.newAnimalName.length >= 1;
      }
    },
    methods: {
      saveNewAnimal() {
        if (this.valid) {
          animalClient.create({ id: null, name: this.newAnimalName }).then((response) => {
            this.newAnimalName = '';
            this.$emit('success', response);
            this.show = false;
          });
        }
      },
      cancel() {
        this.newAnimalName = '';
        this.show = false;
      }
    },
    created() {
      modals.$on('beginCreatingAnimal', () => {
        this.show = true;
      });
    }
  }
</script>

<style scoped>

</style>
