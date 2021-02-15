<template>
  <div id="app">
    <Navbar></Navbar>
    <Header></Header>
    <Recipes></Recipes>
    <About></About>
    <Contact></Contact>

    <router-view />
  </div>
</template>

<script>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Header from './components/Header.vue';
import Navbar from"./components/Navbar.vue";
import Recipes from './components/Recipes.vue';

export default {
  name:"app",
  components: { Navbar, Header, Recipes, About, Contact },
}
</script>
<style lang="scss">
.container{
  width: 80%;
  margin: auto;
}
body{
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
