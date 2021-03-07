<template>
	<div class="top">
		<div class="top">
			<span>ToDoList</span>

            <!-- 不要使用v-model绑定 -->
			<input type="text" :value="str" @keyup="keyup" />

		</div>
	</div>
</template>

<script>
export default {
	props: ['str'], // 接收父组件数据
	methods: {
		keyup(e) {  // keyup事件处理函数
            this.$emit('add', e)
        },
	},
};
</script>
