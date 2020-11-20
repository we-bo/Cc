<template>
    <div class="me">
        <mt-header title="我的">
            <div slot="right">
                <div v-if="this.$store.state.isLogined==0">
                    <router-link to="/register">注册</router-link>/
                    <router-link to="/login">登录</router-link>
                </div>
                <div v-else>
                    <p class="p_double">{{this.$store.state.username}}</p>
                </div>
            </div>
        </mt-header>
        <!-- <hr> -->
        <div class="block"></div>
        <mt-cell title="我的账号" is-link></mt-cell>
        <div class="block"></div>
        <mt-cell title="我的消息" is-link></mt-cell>
        <div class="block"></div>
        <mt-cell title="任务中心" is-link style="border-bottom:1px solid #f5f5f5;"></mt-cell>
        <mt-cell title="我的等级" is-link style="border-bottom:1px solid #f5f5f5;"></mt-cell>
        <mt-cell title="阅读历史" is-link style="border-bottom:1px solid #f5f5f5;"></mt-cell>
        <mt-cell title="朗读语音包" is-link style="border-bottom:1px solid #f5f5f5;"></mt-cell>
        <div class="block"></div>
        <mt-cell title="意见反馈" is-link style="border-bottom:1px solid #f5f5f5;"></mt-cell>
        <div class="block"></div>
        <mt-button color="#ccc" size="large" @click="logout">退出登录</mt-button>
        <my-footer></my-footer>
    </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 400;
}
.mint-header-title {
    margin-bottom: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    color: black;
    font-weight: bold;
    font-size: 18px;
    flex: 1;
}
.me>.mint-header {
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}
hr{
    width: 95%;
    margin-top: 0px;
    margin-left: 9px;
}

button:focus {
    border: 0;
    outline: none;
}
.mint-button--default {
    color: black;
    background-color: #fff;
    font-size: 16px;
    box-shadow: 0 0 1px #b8bbbf;
}
.block{
    width: 100%;
    height: 10px;
    background-color: #ccc;
}
.p_double{
    color: black;
    margin-top: 8px;
}
</style>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        logout(){
            this.$store.commit('logout')
        }
    }
}
</script>