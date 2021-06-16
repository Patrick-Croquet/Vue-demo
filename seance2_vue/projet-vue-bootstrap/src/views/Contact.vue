<template>
  <div class="contact">
    <AppHeader msg="Welcome to Your Vue.js App"/>
    <h1>This is an contact page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'Contact',
  components: {
    AppHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
