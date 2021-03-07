<template>
	<div class="home">
        <h1>home组件</h1>
        <button @click="todetail">去详情页</button>
	</div>
</template>

<script>
export default {
    methods: {
        todetail() {
            // 通过编程式导航 进行页面跳转
            this.$router.push('/detail')
        }
    },
}
</script>
