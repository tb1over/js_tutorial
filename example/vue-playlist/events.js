
new Vue({
    el: '#vue-app',
    data:{
        age:30,
        x : 0,
        y : 0
    },
    methods:{
        add:function(inc=1){
            this.age += inc;
        },
        sub:function(dec=1){
            this.age -= dec;
        },
        updateXY:function(event){
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving : function(event){
            event.stopPropagation();        //阻止事件冒泡
        },

        alert : function(){
            alert('Hello World!');
        }
    }
});