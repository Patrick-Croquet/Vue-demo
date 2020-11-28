var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue.js'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous avez affichĂÂŠ cette page le ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }

})