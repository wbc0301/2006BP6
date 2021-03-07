<template>
	<div class="detail">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="item in list.gallery" :key="item.id">
				<img :src="item.img_url" />
			</van-swipe-item>
		</van-swipe>
		<h2>{{list.info.name}}</h2>
	</div>
</template>

<script>
export default {
	name: 'detail',
	data() {
		return {
			list: {}
		}
	},
	mounted() {
		this.$axios({
			url: 'http://shop.bufantec.com/bufan/goods/detailaction',
			method: 'get',
			params: {
				openId: 13216484256,
				id: this.$route.query.id
			}
		}).then(res => {
			console.log(res)
			this.list = res.data
		})
	}
}
</script>

<style lang="scss" scoped>
.detail {
	.my-swipe .van-swipe-item {
		background-color: #39a9ed;
		font-size: 0;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>