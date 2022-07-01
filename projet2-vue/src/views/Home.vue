<template>
  <div>
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <Carousel />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <section class="mb-20 text-gray-700">
      <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        <h3 class="text-3xl font-bold mb-6 text-gray-800">Details</h3>
        <p class="mb-6 pb-2 md:mb-12 md:pb-0">
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-12 lg:gap-6 mx-8 md:mx-16 text-center">
        
          <Detail v-for="(detail,index) in details" :key="index" :titre="detail.titre" :image="detail.image"  />

      </div>
    </section>
    <Features />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Detail from '@/components/Detail.vue'
import Features from '@/components/Features.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel,
    Detail,
    Features,
  },
  /*data(){
        return {
            details:[
                {
                  titre:'Gîte',
                  image:'gite.png',
                },
                {
                  titre:'Randonnée',
                  image:'randonnee.png',
                },
                {
                  titre:'Ski',
                  image:'ski.png',
                },
            ],
        }
    },*/
  data(){
        return {
            details:[],
            errors: []
        }
  },
  // Fetches Details when the component is created.
  created() {
    axios.get(`http://localhost:8080/details.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.details = response.data.details
    })
    .catch(e => {
      this.errors.push(e)
    })
  }  
}
</script>