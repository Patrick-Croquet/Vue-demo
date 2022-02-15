<template>
  <div class="mb-0 md:mb-0">
    <div class="flex justify-center mb-6">
      <img :src="require(`@/assets/${image}`)" class="rounded-full shadow-lg w-32" />
    </div>
    <h2 class="text-xl font-semibold mb-4">{{titre}}</h2>
    <p class="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          class="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
    </p>
    <button class="bg-gray-400 hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 border border-gray-700 rounded">
  View details &raquo;
</button>
  </div>
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
    .marketing {
      margin-bottom: 1.5rem;
      text-align: center;
    }
    .marketing h2 {
      font-weight: 400;
    }

</style>