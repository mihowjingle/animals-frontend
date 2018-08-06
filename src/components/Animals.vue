<template>
  <div>
    <sui-header>Animals</sui-header>
    <ani-table :animals="animals"></ani-table>
    <sui-button icon="plus" label-position="left" @click="showModal = true">Add animal</sui-button>
    <ani-new-animal :show="showModal" @success="reload" @cancel="showModal = false"></ani-new-animal>
  </div>
</template>

<script>
  import { animalClient } from "../rest/animal-client";
  import SuiButton from "semantic-ui-vue/dist/commonjs/elements/Button/Button";
  import SuiHeader from "semantic-ui-vue/dist/commonjs/elements/Header/Header";
  import Table from './Table.vue';
  import NewAnimal from './NewAnimal.vue';

  export default {
    name: 'HelloWorld',
    components: {
      SuiHeader,
      SuiButton,
      'ani-table': Table,
      'ani-new-animal': NewAnimal
    },
    data() {
      return {
        animals: [],
        showModal: false
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
        this.showModal = false;
      }
    }
  }
</script>

<style scoped>
</style>
