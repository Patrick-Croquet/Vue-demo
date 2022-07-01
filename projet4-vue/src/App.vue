<template>
  <Header/>

  <router-view/>

  <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;
  color: #2c3e50;*/
}

#nav {
  padding: 0px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: #3b95ee;
  border-radius: .5rem;
}

footer a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

footer a:hover {
  color: #3b95ee;
}

footer p {
  height: 20px;
}

</style>
