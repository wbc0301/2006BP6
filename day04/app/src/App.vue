<template>
	<div id="app">
		<!-- 不使用子组件 -->
		<!-- <div class="top">
			<span>ToDoList</span>
			<input type="text" v-model="str" @keyup.enter="add" />
		</div>-->


		<!-- 使用子组件 同时传递数据，监听自定义事件 --> 
        <!-- add函数内部逻辑要做相应变化 -->
		<top :str="str" @add="add"></top>


		<!-- 正在进行 -->
		<div>
			<h2>正在进行 {{doingList.length}}</h2>
			<ul>
				<li v-for="item in doingList" :key="item.id">
					<input type="checkbox" @change="change(item.id, true)" />

					<span v-if="!item.edit" @dblclick="edit(item.id)">{{item.str}}</span>
					<input v-else type="text" v-model="item.str" @blur="blur" />

					<button @click="del(item.id)">删除</button>
				</li>
			</ul>
		</div>

		<!-- 已经完成 -->
		<div>
			<h2>已经完成 {{doneList.length}}</h2>
			<ul>
				<li v-for="item in doneList" :key="item.id">
					<input type="checkbox" @change="change(item.id, false)" checked />

					<span v-if="!item.edit" @dblclick="edit(item.id)">{{item.str}}</span>
					<input v-else type="text" v-model="item.str" @blur="blur" />

					<button @click="del(item.id)">删除</button>
				</li>
			</ul>
		</div>

		<button @click="clear">clear</button>
	</div>
</template>

<script>
import top from './components/top';

export default {
	name: 'App', // 当前组件的名字
	components: { top, },
	data() {
		return {
			str: '', // 用户输入的值
			// editStr: '', // 用户修改的值
			list: [],
			// doingList: [], // 改用计算属性
			// doneList: [],
		}
	},
	// 计算属性 是一个一个的函数 函数名可以当数据来使用  函数名就是key  函数return的值就是value 
	// 他会根据他依赖的数据进行计算， 当他依赖的任何一个数据发生改变的时候就会重新计算
	computed: {
		doingList() {
			console.log(123)
			let arr = this.list.filter(item => {
				return item.done === false
				// return !item.done
			})
			return arr
		},
		doneList() {
			return this.list.filter(item => {
				return item.done === true
				// return item.done
			})
		},
	},
	methods: {
		add(e) { // 添加
			console.log(e)
			this.str = e.target.value;
			if (e.keyCode == 13) {
                let obj = {
                    id: Math.random(),
                    str: this.str,  // 该条代办显示的内容
                    done: false,  // false：正在进行  ture:已经完成
                    edit: false,  // false：没有在编辑 ture:正在编辑中
                }
                this.list.push(obj)
                this.str = '';
			}

		},
		del(id) { // 删除
			// es6
			let index = this.list.findIndex(item => {
				return item.id === id;
			})
			console.log(index)
			this.list.splice(index, 1)
		},
		change(id, val) { // 点击复选框
			this.list.forEach(item => {
				if (item.id === id) {
					item.done = val
				}
			});
		},
		clear() {
			this.list = [];
		},
		edit(id) { //编辑
			this.list.forEach(item => {
				if (item.id === id) {
					item.edit = true;
				} else {
					item.edit = false;
				}
			})
		},
		blur() {
			this.list.forEach(item => {
				item.edit = false;
			})
		}
	},
	watch: {
		// 监听 监听数据的变化  函数名就是要监听的数据  数据一变 函数就会被调用
		// list(newValue, oldValue) {
		//     // 保存数据 
		//     localStorage.aa = JSON.stringify(newValue);
		// }

		list: {
			// 数据变化后要调用的函数 必须是：handler
			handler: function (newValue, oldValue) {
				// 保存数据 
				localStorage.aa = JSON.stringify(this.list);
			},
			deep: true, // 是否开启深度监听
		}
	},

	// 生命周期函数   不常用
	beforeCreate() {
		console.log('beforeCreate:', this.list)
	},


	// created 在this完成之后  created里边可以访问到this上边的任何属性
	created() {  // 常用 还没有dom
		console.log('created:', this.list)
		this.list = JSON.parse(localStorage.aa || '[]')
		console.log('created--dom:', document.getElementsByClassName('top')[0])
	},

	// 在页面挂载之后调用  可以操作dom
	mounted() { // 常用
		console.log('mounted:', this.list)
		console.log('mounted--dom:', document.getElementsByClassName('top')[0])
	},

}
</script>

<style lang="scss">
#app {
	width: 300px;
	margin: auto;
}
</style>
