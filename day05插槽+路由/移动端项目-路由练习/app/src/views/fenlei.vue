<template>
	<div class="fenlei">
		<van-grid :column-num="2">
			<van-grid-item v-for="item in list" :key="item.id" @click="toDetail(item.id)">
				<van-image :src="item.list_pic_url" />
				<div>{{item.name}}</div>
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script>
export default {
	name: 'fenlei',
	data() {
		return {
			list: []
		}
	},
	methods: {
		toDetail(id) {
			this.$router.push({
				path: '/detail',
				query: { id }
			})
		}
	},
	mounted() {
		this.$axios({
			url: 'http://shop.bufantec.com/bufan/goods/goodsList?categoryId=1005000',
			method: 'get',
			// data: { categoryId: 1005000 }
		}).then(res => {
			console.log(res)
			this.list = res.data.data;
		})
	}
}
</script>

<style lang="scss" scoped>
.fenlei {
}
</style>