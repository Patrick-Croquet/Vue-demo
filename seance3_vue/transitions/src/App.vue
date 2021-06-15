<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/newRoute">newRoute</router-link>

    <router-view v-slot='{ Component }'>
      <transition name="myTransition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

  </div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.myTransition-enter-active, .myTransition-leave-active {
    transition: opacity .5s;
}
.myTransition-enter-from, .myTransition-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

</style>
