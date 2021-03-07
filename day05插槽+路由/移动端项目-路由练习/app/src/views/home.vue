<template>
	<div class="home">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="item in imgList" :key="item.id">
                <img :src="item.image_url" >
            </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>

export default {
	name: 'home',
    data() {
        return {
            imgList: [] // 轮播图的数据
        }
    },
    mounted() {
        this.$axios({url: 'http://shop.bufantec.com/bufan/index/index', method:'get'}).then(res => {
            console.log(res)
            this.imgList = res.data.banner
        })
    }
}
</script>

<style lang="scss" scoped>
.home {
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