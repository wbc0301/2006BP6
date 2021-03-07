<template>
	<div id="app">
		<div id="nav">
			<!-- router-link 可以实行路由跳转 -->
			<router-link tag="span" to="/home">Home1</router-link>|
			<router-link tag="span" to="/about">About2</router-link>|
			<router-link tag="span" :to="{path: '/detail', query:{id: 11111}}">详情</router-link>
		</div>

		<!-- router-view相当于是一个站位的东西 -->
		<router-view />

	</div>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
