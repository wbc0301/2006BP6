<template>
	<div id="app">
		<h1>我是父组件的东东</h1>
		<div class>abc</div>

		<!-- 组件标签之间的内容就是插槽 -->
		<top>
			<!-- <template v-slot:a>
				<p>111</p>
			</template>-->

			<!--  v-slot:可以简称成# -->
			<template #a>
				<p>111</p>
			</template>

			<template v-slot:b>
				<div>222</div>
			</template>
		</top>
	</div>
</template>

<script>
import top from './components/top';

export default {
	name: 'App', // 当前组件的名字
	components: { top },
	data() {
		return {}
	},
}
</script>

<style lang="scss">
#app {
	width: 300px;
	margin: auto;
}
</style>
