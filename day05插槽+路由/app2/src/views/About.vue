<template>
	<div class="about">
		<h1>列表组件</h1>
		<ul>
			<li v-for="item in list" :key="item.id" @click="todetail(item.id)">{{item.str}}</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list: [
				{ id: 1, str: 'aaaaaa' },
				{ id: 2, str: 'bbbbbb' },
				{ id: 3, str: 'cccccc' },
				{ id: 4, str: 'dddddd' },
			]
		}
	},
	methods: {
		todetail(id) {
			// 路由传参
			// this.$router.push('/detail')
			this.$router.push({
				path: '/detail',
				query: { id } // 参数在地址栏可以看到 不太安全 但是刷新数据不会丢失
 
                // name: 'Detail',
				// params: { id } // 不能和path一起使用  地址栏看不到 安全 但是刷新页面数据会丢失
			})
		}
	},
}
</script>
