
let one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'app-one的内容'
    },
    methods:{

    },
    computed:{
        greet: function(){
            return 'Hell App one ';
        }
    }
});


let two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'app-two的内容'
    },
    methods:{
        changeTitle: function(){    //修改app-one的title属性
            one.title = '已经改名了';
        }
    },
    computed:{
        greet: function(){
            return 'Hell App two ';
        }
    }
});

two.title = 'Title for App-two';