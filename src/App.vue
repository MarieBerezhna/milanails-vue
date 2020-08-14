<template>
  <div id="app">
      <div id="nav" class="position-absolute w-100 mx-auto">
        <router-link to="/" id="logo-link">
          <img :src="require('@/assets/logo.png')" alt="Milanails"> M
        </router-link>
        <router-link to="/">Manicure</router-link>
        <router-link to="/pedicure">Pedicure</router-link>
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
  font-family: cursive;
}
#logo-link {
  position: absolute;
  left: 10px;
  top:10px;
  img {
    width: 30px;
  }
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
    opacity: 0.7;
    margin: 10px;
    &.router-link-exact-active {
      color: #AA2423;
      opacity: 1;
      border-bottom: 2px solid white;
    }
  }
  #logo-link {
    border-bottom: transparent;
  }
  a:hover {
    text-decoration: none;
    opacity: 0.9;
  }
}
@media screen and (min-width: 1200px) {
  .nav-bar {
    height: 340px;
  }
  #nav a {
    font-size: 1.5rem;
  }
  #logo-link img {
    width: 100px;
  }
}
</style>
