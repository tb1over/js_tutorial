
//实例化Vue对象
new Vue({
    el: '#vue-app', 
    data:{
        name:'Mr.Chen',
        job:'teacher',
        website: 'http://sjxy.nxnu.edu.cn',
        websiteTag : '<a href="http://sjxy.nxnu.edu.cn">宁夏师范学院数学与计算机科学学院</a>'
    },
    methods:{
        
        greet: function(time){
            return `Good ${time}  ${this.name}`;
        }
    }
});

/*
* el:element 需要获取的元素，一定是html的根容器元素，挂载点
* data:用于数据存储,对象
* methods:各种方法
* v-bind  v-html给属性绑定对应的值
*/