<template>
    <div class="a">
        <button @click="handler">我是按钮1</button>
        <div>{{num}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '我是bt1',
                num: 100,
            }
        },
        methods: {
            handler() {
                alert('我是按钮1')
            }
        }
    }
</script>

<style lang="scss" scoped>
.a {
    border: 10px solid pink;
}
button {
    line-height: 50px;
    color: red;
    border-color: green;
}
</style>