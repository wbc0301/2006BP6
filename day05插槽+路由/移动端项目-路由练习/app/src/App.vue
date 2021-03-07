<template>
	<div id="app">
		<router-view />


		<van-tabbar route v-model="active">
			<van-tabbar-item to="/home"  icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item to="/fenlei" icon="apps-o">分类</van-tabbar-item>
			<van-tabbar-item to="/detail" icon="setting-o">详情</van-tabbar-item>
		</van-tabbar>

		<!-- <div id="nav">
			<router-link to="/home">首页</router-link>
			<router-link to="/fenlei">分类</router-link>
			<router-link to="/detail">详情</router-link>
		</div>-->
	</div>
</template>
<script>
export default {
	data() {
		return {
			active: 1,
		};
	},
}
</script>

<style lang="scss">
// #nav {
// 	position: fixed;
// 	bottom: 0;
// 	width: 100%;
//     display: flex;
//     justify-content: space-between;
//     line-height: 40px;
//     a {
//         flex: 1;
//         text-align: center;
//     }
// }
</style>
