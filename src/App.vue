<template>
  <div id="app">
    <!-- <HolaMundo/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <h1>Component App</h1>
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/navegacion/Menu.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HolaMundo from './components/HolaMundo.vue'
export default {
  name: 'App',
  components: {
    Menu
    // HelloWorld,
    // HolaMundo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
