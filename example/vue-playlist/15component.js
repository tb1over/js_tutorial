Vue.component('greeting',{
    template: `<p>
                    {{name}}: Hello everyone!
                    <button v-on:click="changeName">改名</button>
                </p>`,
    data: function(){
        return {
            name: 'chenchen'
        }
    },
    methods:{
        changeName: function(){
            this.name = 'cc';
        }
    }
});


new Vue({
    el: '#vue-app-one',
});

new Vue({
    el: '#vue-app-two'
});

