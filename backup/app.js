var One = new Vue({
    el:'#vue-app-one', 
    data:{
        title: 'Vue App One'
   },
    computed: {
        greet: function (){
            return 'Hello from App 1';
        },
    }
});

var Two = new Vue({
        el:'#vue-app-two', 
        data:{
            title: 'Vue App One'
        },
        methods: {

    },
    computed: {
        greet: function (){
            return 'Hello from App 2 dude!';
        },
    }
});