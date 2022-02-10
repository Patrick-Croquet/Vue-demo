<template>
  <div class="col-lg-4">
      <img :src="require(`@/assets/${image}`)" width="140" height="140"  class="img-fluid" alt="...">
      <h2>{{titre}}</h2>
      <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
      <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
  </div><!-- /.col-lg-4 -->
</template>

<script>
export default {
  name: 'Details',
  props: {
    titre:String,
    image:String,
  }
}
</script>

<style>
    /* MARKETING CONTENT
    -------------------------------------------------- */
    
    /* Center align the text within the three columns below the carousel */
    .marketing .col-lg-4 {
      margin-bottom: 1.5rem;
      text-align: center;
    }
    .marketing h2 {
      font-weight: 400;
    }
    .marketing .col-lg-4 p {
      margin-right: .75rem;
      margin-left: .75rem;
    }
</style>