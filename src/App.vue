<template>
  <div id="app">
      <div id="nav" class="position-absolute w-100 mx-auto">
        
        <router-link to="/">Milanails</router-link> |
        <router-link to="/blog">Blog</router-link>
      </div>
    <div class="container-fluid nav-bar">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-bar {
  // height: 340px;  
  height: 80px;
  background-image: url(./assets/cover.png);
  background-position: center;
  background-size: 100%;
  color: white;
  filter:contrast(50%);
}
#nav {
  padding: 30px;
  z-index: 10;
  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media screen and (min-width: 1200px) {
  .nav-bar {
    height: 340px;  
  }
}
</style>
