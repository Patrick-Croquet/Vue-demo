<template>
  <div class="mx-8 md:mx-16">  
  <!-- START THE FEATURETTES -->    
    <hr class="featurette-divider" />
    
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col bg-gray-200 w-full md:w-2/3 md:content-center">
        <h2 class="ml-5 text-3xl text-gray-800 font-semibold mb-2">First featurette heading. <span class="text-gray-400">It’ll blow your mind.</span></h2>
        <p class="mb-5 ml-5">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="w-full md:w-1/3">
          <img src="@/assets/montagne3.jpg" width="100%" height="100%" alt="">
      </div>
    </div>

    <hr class="featurette-divider">
        
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col bg-gray-200 w-full md:w-2/3 order-first md:order-last md:content-center">
        <h2 class="ml-5 text-3xl text-gray-800 font-semibold mb-2">Oh yeah, it’s that good. <span class="text-gray-400">See for yourself.</span></h2>
        <p class="mb-5 ml-5">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="w-full md:w-1/3">
          <img src="@/assets/montagne5.jpg" width="100%" height="100%" alt="">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col bg-gray-200 w-full items-center md:w-2/3 md:items-center">
        <h2 class="ml-5 text-3xl text-gray-800 font-semibold mb-2">And lastly, this one. <span class="text-gray-400">Checkmate.</span></h2>
        <p class="mb-5 ml-5">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="w-full md:w-1/3">
        <img src="@/assets/vtt.jpg" width="100%" height="100%" alt="">
      </div>
    </div>

    <hr class="featurette-divider" />

  <!-- /END THE FEATURETTES -->
  </div>

</template>

<script>
export default {
  name: 'Features',
  props: {
   
  }
}
</script>

<style>
  /* Featurettes
  ------------------------- */
  
  .featurette-divider {
    margin: 2rem 0; /* Space out the Bootstrap <hr> more */
  }
  
  /* Thin out the marketing headings */
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.05rem;
  }

</style>