<template>
	<div class="two">
		<h3>我是子组件two</h3>
		<button @click="add(-1)">-</button>
		<span>{{num}}</span>
		<button @click="add(1)">+</button>
	</div>
</template>

<script>
export default {
	// 2：子组件通过props接收父组件传递过来的数据
	props: ['num'],
	methods: {
		add(val) {
			// 通过调用$emit来触发一个自定义事件
			// 第一个参数是要触发的自定义事件名
			// 第二个参数是传递给事件处理函数的数据
			this.$emit('change', val)

			// 子组件不能直接修改父组件传递过来数据
			// this.num += val
		}
	},
}
</script>

<style lang="scss" scoped>
.two {
	margin-top: 50px;
	background-color: skyblue;
	padding: 40px;
}
</style>