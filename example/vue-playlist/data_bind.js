
new Vue({
    el : '#vue-app',
    data:{
        name: 'chen',
        age : ''
    },
    methods:{
        logName: function(){
            console.log(this.$refs.refName.value);
            this.name = this.$refs.refName.value;
        },
        logAge:function(){
            console.log(this.$refs.refAge.value);
            this.age = this.$refs.refAge.value;

        }
    }
});