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
      @click="beginCreatingAnimal"
      positive
    >
      Add animal
    </sui-button>

    <ani-new-animal @success="reload"></ani-new-animal>
    <ani-update-animal @success="reload"></ani-update-animal>
    <ani-delete-animal @success="reload"></ani-delete-animal>
  </div>
</template>

<script>
  import { animalClient } from "../rest/animal-client";
  import { modals } from "../modals/modals";
  import SuiButton from "semantic-ui-vue/dist/commonjs/elements/Button/Button";
  import SuiHeader from "semantic-ui-vue/dist/commonjs/elements/Header/Header";
  import Table from "./Table.vue";
  import NewAnimal from "./NewAnimal.vue";
  import UpdateAnimal from "./UpdateAnimal.vue";
  import DeleteAnimal from "./DeleteAnimal.vue"

  export default {
    name: 'HelloWorld',
    components: {
      SuiHeader,
      SuiButton,
      'ani-table': Table,
      'ani-new-animal': NewAnimal,
      'ani-update-animal': UpdateAnimal,
      'ani-delete-animal': DeleteAnimal
    },
    data() {
      return {
        animals: []
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
      },
      beginCreatingAnimal() {
        modals.beginCreating();
      },
      beginUpdatingAnimal(animal) {
        modals.beginEditing(animal);
      },
      beginDeletingAnimal(id) {
        modals.beginDeleting(id);
      }
    }
  }
</script>

<style scoped>
</style>
