<template>
    <div class="one">
        <h3>我是子组件one</h3>
        <div>{{a}}</div>
        <div>{{price}}</div>
        <div>{{num}}</div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        // 2：子组件通过props接收父组件传递过来的数据
        props: ['a', 'b', 'price', 'num'],
    }
</script>

<style lang="scss" scoped>
.one {
    background-color: yellowgreen;
    padding: 40px;
}
</style>