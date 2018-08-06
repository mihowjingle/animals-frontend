<template>
  <div id="app">
    <ani-animals/>
  </div>
</template>

<script>
import Animals from './components/Animals'

export default {
  name: 'App',
  components: {
    'ani-animals': Animals
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 20px;
}
</style>
