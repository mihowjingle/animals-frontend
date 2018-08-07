import Vue from 'vue';

export const modals = new Vue({
  methods: {
    beginCreating() {
      this.$emit('beginCreatingAnimal');
    },
    beginEditing(animal) {
      this.$emit('beginEditingAnimal', animal);
    },
    beginDeleting(animal) {
      this.$emit('beginDeletingAnimal', animal);
    }
  }
});
