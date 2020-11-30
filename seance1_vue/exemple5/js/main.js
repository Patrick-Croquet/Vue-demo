new Vue({
  el: '#transition-components-demo',
  data: {
    view: 'v-b'
  },
  components: {
    'v-a': {
      template: '<div>Composant A</div>'
    },
    'v-b': {
      template: '<div>Composant B</div>'
    }
  }
})