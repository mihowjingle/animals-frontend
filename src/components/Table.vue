<template>
  <sui-table celled selectable>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>ID</sui-table-header-cell>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell collapsing>Actions</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="animal in animals" :key="animal.id">
        <sui-table-cell collapsing>{{ animal.id }}</sui-table-cell>
        <sui-table-cell>{{ animal.name }}</sui-table-cell>
        <sui-table-cell collapsing>
          <sui-icon name="edit outline" color="blue" size="large" @click="beginUpdatingAnimal(animal)" style="cursor: pointer"></sui-icon>
          <sui-icon name="trash alternate outline" color="red" size="large" @click="beginDeletingAnimal(animal)" style="cursor: pointer"></sui-icon>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
  import SuiTable from "semantic-ui-vue/dist/commonjs/collections/Table/Table";
  import SuiTableHeader from "semantic-ui-vue/dist/commonjs/collections/Table/TableHeader";
  import SuiTableHeaderCell from "semantic-ui-vue/dist/commonjs/collections/Table/TableHeaderCell";
  import SuiTableBody from "semantic-ui-vue/dist/commonjs/collections/Table/TableBody";
  import SuiTableRow from "semantic-ui-vue/dist/commonjs/collections/Table/TableRow";
  import SuiTableCell from "semantic-ui-vue/dist/commonjs/collections/Table/TableCell";
  import SuiIcon from "semantic-ui-vue/dist/commonjs/elements/Icon/Icon";

  export default {
    name: "Table",
    components: {
      SuiIcon,
      SuiTableCell,
      SuiTableRow,
      SuiTableBody,
      SuiTableHeaderCell,
      SuiTableHeader,
      SuiTable
    },
    props: ['animals'],
    methods: {
      beginUpdatingAnimal(animal) {
        this.$emit('updateRequested', animal);
      },
      beginDeletingAnimal(animal) {
        this.$emit('deleteRequested', animal);
      }
    }
  }
</script>

<style scoped>

</style>
