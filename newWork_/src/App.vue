<template>
  <div id="app">
    <!-- <UserHeader></UserHeader>
    <UserContent></UserContent> -->
    <PersonHeader></PersonHeader>
    <PersonNav></PersonNav>
    <PersonContent></PersonContent>

  </div>
</template>

<script>
// import UserHeader from './components/TeacherLogin/UserHeader.vue'
// import UserContent from './components/TeacherLogin/UserContent.vue'
import PersonHeader from './components/PersonalDetails/PersonHeader.vue'
import PersonNav from './components/PersonalDetails/PersonNav.vue'
import PersonContent from './components/PersonalDetails/PersonContent.vue'

export default {
  name: 'App',
  components: {
    // UserHeader,
    // UserContent,
    PersonHeader,
    PersonNav,
    PersonContent,
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
