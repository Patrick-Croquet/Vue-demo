const app = new Vue({
    el: '#app',
    data () {
        return {
            products: []
          }  
    },
    computed: {
        totalProducts() {
            return this.products.reduce(
                (sum, product) => {
                    return sum + product.quantity
                }, 0);          
        }
    },
    // created() {
    //     // fetch('https://api.myjson.com/bins/74l63')
    //     fetch('products.json')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.products = json.products
    //             //this.products = json
    //         })
    // }
    mounted () {
        axios
          //.get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .get('products.json')
          .then(response => (this.products = response.data.products))
    } 
})