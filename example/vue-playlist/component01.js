
//01
/*
Vue.component('my-component',{
    template: `<div> A custom component.</div>`
});

new Vue({
    el: '#example'
});
*/

//02
/*
Vue.component('simple-counter',{
    template: `<button v-on:click="counter+=1"> {{counter}}</button>`,
    data:function(){
        return {
            counter:0
        }
    }
});
new Vue({
    el: '#example'
});
*/

//03 使用 Prop 传递数据
/*
Vue.component('child',{
    //声明props
    props:['message'],  //声明期待的数据
    template:`<span> {{message}} </span>`
});
new Vue({
    el: '#example'
});
*/

//04 动态prop
/*
Vue.component('child',{
    props:['myMessage'],
    template:`<span> {{myMessage}} </span>`
});
new Vue({
    el: '#example',
    data:{
        parentMsg: 'Message from parent'
    }
});
*/

//05 使用 v-on 绑定自定义事件
Vue.component('button-counter',{
    template:`<button v-on:click="incrementCounter">{{counter}}</button>`,
    data: function(){
        return{
            counter:0
        }
    },
    methods: {
        incrementCounter:function(){
            this.counter += 1;
            this.$emit('increment', this.counter); //$emit(eventName) 触发事件,
                                     //父组件使用v-on:increment监听该事件
        }
    }
});
new Vue({
    el: '#example',
    data:{
        total:0
    },
    methods:{
        incrementTotal:function(v){
            this.total += 1;
            console.log(v);
        }
    }
});