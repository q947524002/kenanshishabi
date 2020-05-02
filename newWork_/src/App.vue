<template>
  <div id="app">
    <UserHeader></UserHeader>
    <UserContent></UserContent>
  </div>
</template>

<script>
import UserHeader from './components/UserHeader.vue'
import UserContent from './components/UserContent.vue'

export default {
  name: 'App',
  components: {
    UserHeader,
    UserContent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
