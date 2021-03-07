<template>
	<div class="about">
		<h1>详情页组件</h1>
        <div>我要展示的内容的id是： {{$route.query.id}}</div>
        <!-- <div>我要展示的内容的id是： {{$route.params.id}}</div> -->
	</div>
</template>
<script>
export default {
    created() {
        // console.log(this.$route.params.id)
    },
    mounted() {}
}
</script>
