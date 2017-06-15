<template>
  <div id="app">
    <header-nav></header-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HeaderNav from './components/common/nav.vue'
import footers from './components/common/footer.vue'
export default {
  components: {
    HeaderNav,
    footers
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  height: 100%;
}
body {
  margin: 0 !important;
  padding: 0;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
}
ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
a{
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}


</style>
