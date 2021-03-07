<template>
	<div class="top">
        <!-- slot就是插槽内容要展示的位置 -->
        <!-- slot标签内部的东西是 后备内容 -->
        <!-- <slot name="a">1111</slot> -->
        <!-- 具名插槽 插槽有名字 -->
        <slot name="a"></slot>

        <h2>我是子组件的标题</h2>

        <slot name="b"></slot>

	</div>
</template>

<script>
export default {
	

};
</script>
