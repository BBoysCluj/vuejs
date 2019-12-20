new Vue({
    el:'#vue-app', 
    data:{
        x:0,
        y:0,

        age:25,
        name:'Adrian',
        job:'Programmer', 
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The new Net Ninja</a>'
    }, 
    methods:{
       add: function(inc){
           this.age += inc;
       },
        substract: function(dec){
            this.age -=dec;
       },
        greet:function (time) {
            return 'Good '+time + ' '+ this.name;
        }, 

        updateXY:function(event){
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('You clicked me!');
        }
    }
});