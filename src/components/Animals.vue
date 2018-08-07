<template>
  <div>
    <sui-header>Animals</sui-header>
    <ani-table
      :animals="animals"
      @updateRequested="beginUpdatingAnimal"
      @deleteRequested="beginDeletingAnimal"
    ></ani-table>

    <sui-button
      icon="plus"
      label-position="left"
      @click="showNewModal = true"
    >
      Add animal
    </sui-button>

    <ani-new-animal
      :show="showNewModal"
      @success="reload"
      @cancel="showNewModal = false"
    ></ani-new-animal>
    <ani-update-animal @success="reload"></ani-update-animal>
  </div>
</template>

<script>
  import { animalClient } from "../rest/animal-client";
  import { modals } from "../modals/modals";
  import SuiButton from "semantic-ui-vue/dist/commonjs/elements/Button/Button";
  import SuiHeader from "semantic-ui-vue/dist/commonjs/elements/Header/Header";
  import Table from './Table.vue';
  import NewAnimal from './NewAnimal.vue';
  import UpdateAnimal from './UpdateAnimal.vue';

  export default {
    name: 'HelloWorld',
    components: {
      SuiHeader,
      SuiButton,
      'ani-table': Table,
      'ani-new-animal': NewAnimal,
      'ani-update-animal': UpdateAnimal
    },
    data() {
      return {
        animals: [],
        showNewModal: false
      }
    },
    mounted() {
      this.reload();
    },
    methods: {
      reload() {
        animalClient.getAll().then((response) => {
          this.animals = response.data;
        });
        this.showNewModal = false;
      },
      beginUpdatingAnimal(animal) {
        modals.beginEditing(animal);
      },
      beginDeletingAnimal(id) {
        // TODO animalClient.delete(id).then(this.reload);
        modals.beginDeleting(id);
      }
    }
  }
</script>

<style scoped>
</style>
