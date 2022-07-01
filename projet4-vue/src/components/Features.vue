<template>
  <div class="container marketing">  
  <!-- START THE FEATURETTES -->    
    <hr class="featurette-divider" />
    
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
          <img src="@/assets/montagne3.jpg" width="100%" height="100%" alt="">
      </div>
    </div>

    <hr class="featurette-divider">
        
    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="@/assets/montagne5.jpg" width="100%" height="100%" alt="">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
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
    margin: 5rem 0; /* Space out the Bootstrap <hr> more */
  }
  
  /* Thin out the marketing headings */
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.05rem;
  }

</style>