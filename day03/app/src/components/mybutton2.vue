<template>
	<div>
		<button @click="handler">我是按钮2</button>
        <div>{{num}}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '我是bt2',
            num: 999,
		}
	},
	methods: {
		handler() {
			alert('我是按钮2')
		}
	}
}
</script>

<style lang="scss" scoped>
button {
	line-height: 50px;
	color: pink;
	border-color: #ccc;
	border-radius: 10px;
}
</style>