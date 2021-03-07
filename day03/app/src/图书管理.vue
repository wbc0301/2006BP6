<template>
	<div id="books">
		<h1>图书管理</h1>
		<label>编号：</label>
		<input type="text" v-model.number="id" :disabled="currIndex >= 0" />
		<label>名称：</label>
		<input type="text" v-model="name" />
		<button @click="add">提交</button>
		<p>图书总数：{{books.length}}</p>
		<table border="1">
			<tr>
				<th>编号</th>
				<th>书名</th>
				<th>时间</th>
				<th>操作</th>
			</tr>
			<!-- v-for 后边必须有一个key, key的值要是唯一的 key的作用：提高性能-->
			<tr v-for="(item, index) in books" :key="item.id">
				<td>{{item.id}}</td>
				<td>{{item.name}}</td>
				<td>{{item.time}}</td>
				<td>
					<button @click="edit(index)">编辑</button>
					<button @click="del(index)" :disabled="currIndex === index">删除</button>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	// 在.vue文件中 data必须是一个函数,还必须返回一个对象
	data() {
		return {
			id: '',
			name: '',
			currIndex: -1, // 当前正在编辑的图书的索引
			books: [
				{
					id: 1,
					name: "三国演义",
					time: new Date().toLocaleString(),
				},
				{
					id: 2,
					name: "水浒传",
					time: new Date().toLocaleString(),
				},
				{
					id: 3,
					name: "红楼梦",
					time: new Date().toLocaleString(),
				},
				{
					id: 4,
					name: "西游记",
					time: new Date().toLocaleString(),
				},
			],
		}
	},
	// data: {	},
	methods: {
		// 添加图书
		add() {
			// 非空验证
			if (!this.id || this.name.trim().length === 0) {
				alert('猪')
				return;
			}

			if (this.currIndex === -1) {
				// 1：添加
				// 判断添加的书籍id是否重复  result为true时表示重复了
				let result = this.books.some(item => {
					return item.id === this.id
				})
				if (result) {
					// id 重复了
					alert('id重复了，请修改id')
				} else {
					// id 没有重复
					let obj = {};
					obj.id = this.id
					obj.name = this.name
					obj.time = new Date().toLocaleString()
					this.books.push(obj)
				}

			} else {
				// 2：编辑之后提交
				this.books[this.currIndex].name = this.name;
				this.currIndex = -1
			}
			// 清空输入框中的数据
			this.id = '';
			this.name = '';
		},
		// 编辑
		edit(index) {
			this.currIndex = index;

			let obj = this.books[index]
			this.id = obj.id
			this.name = obj.name
		},

		// 删除
		del(index) {
			this.books.splice(index, 1)
			if (this.currIndex > index) {
				this.currIndex--
			}
		},
	}
}
</script>

<style lang="scss" scoped>
// scoped 作用： 把css的作用域限制在当前组件，不会影响到别的组件
div {
    color: red;
}
#app {
	width: 500px;
	margin: auto;
	text-align: center;
	table {
		width: 100%;
	}
}
</style>
