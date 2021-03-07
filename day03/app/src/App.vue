<template>
	<div class="father">
        <h1>我是父组件</h1>
        <div >单价：{{price}}</div>
        <div>数量：{{num}}</div>
        <div>总价格：{{price *  num}}</div>

        <!-- 3：直接在HTML中使用 -->
        
        <!-- 1：父组件要做的事：使用子组件的时候通过自定义属性的方式进行传递 -->
        <one a="100"  b="2" :price="price" :num="num"></one>
        <two :num="num" @change="change"></two>
	</div>
</template>
 
<script>
// 使用子组件分三步：
// 1：引入子组件
// 2：注册子组件
// 3：直接在HTML中使用

// 1：引入子组件
import  one from  './components/one'
import  two from  './components/two'


export default {
	// 在.vue文件中 data必须是一个函数,还必须返回一个对象
	data() {
		return {
            price: 10,
            num: 1,
        }
	},
    methods: {
        change(val) {
            this.num += val;
        }
    },
    components: {
        // 2：注册子组件
        one,
        two,
    }
}
</script>

<style lang="scss" scoped>
// scoped 作用： 把css的作用域限制在当前组件，不会影响到别的组件
.father {
    background: pink;
    padding: 40px;
}
</style>
