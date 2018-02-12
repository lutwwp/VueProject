var vm = new Vue({
    el:"#app",
    data:{
        //    模型
        totalMoney:0,
        productList:[]
    },
    filters:{
        //    过滤器
    },
    mounted:function(){
        //    入口：页面加载完需要执行的方法
        this.cartView();
    },
    methods:{
        // 事件的绑定
        cartView:function(){
            var _this = this;
            //使用resource插件
            this.$http.get("data/cartData.json",{"id":123}).then(function(res){
                //在chorm中cart.js打断点查看res的数据结构
                _this.productList = res.data.result.list;
                _this.totalMoney = res.data.totalMoney;
            });
            //this.title = "Vue Hello";
        }
    }
});
//Vue.filter();