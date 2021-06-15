let app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue.js'
    }
})

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }

})