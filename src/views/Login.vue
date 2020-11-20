<template>
    <div class="login">
        <my-header></my-header>
        <div>
            <img class="img" src="../assets/images/zssq2.jpg" alt="">
        </div>
       <mt-field type="text"
        label="用户名"
        placeholder="手机号/邮箱/用户名"
        :attr="{maxlength:15}"
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername"
        ></mt-field>
        <hr class="password">
        <mt-field type="password"
        label="密码"
        placeholder="请输入密码"
        :attr="{maxlength:15}"
        v-model="password"
        :state="passwordState"
        @blur.native.capture="checkPassword"
        ></mt-field>
        <mt-button color="#d82626" size="large" @click="handle">登录</mt-button>
    </div>
</template>
<style>
.img{
    width: 100%;
}
.login>.mint-cell-wrapper {
    margin-top: 5px;
    background-image: linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 0);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-origin: content-box;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 10px;
    width: 100%;
}
</style>
<script>
import {getLogin} from '../assets/js/apis/index.js'
import qs from 'qs'
export default {
    data(){
        return{
            username:'',
            password:'',
            usernameState:'',
            passwordState:'',
        }
    },
    methods:{
        checkUsername(){
            let usernameRegExp=/^[0-9a-zA-Z_]{6,20}$/;
            if(usernameRegExp.test(this.username)){
                this.usernameState='success';
                return true;
            }else{
                this.usernameState="error"
                this.$toast({
                    message:"请填写用户名",
                    position:"top",
                    duration:"2000"
                });
                return false;
            }
        },
        checkPassword(){
            let passwordRegExp=/^[0-9a-zA-Z_]{6,20}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState='success';
                return true
            }else{
                this.passwordState='error';
                this.$toast({
                    message:"密码必须为字母、数字的组合体",
                    position:"top",
                    duration:"2000"
                });
                return false
            }
        },
        handle(){
            if(  this.checkUsername() && this.checkPassword() ){
                let obj={
                    username:this.username,
                    password:this.password,
                }
                //分发Actions
                    this.axios.post('/bpi/login',qs.stringify(obj)).then(res=>{
                        //用户登录成功
                        if(res.data.code==1){
                        console.log(res.data.results);
                        //提交Autations
                        this.$store.commit('logined',res.data.info);
                        console.log(res.data.results);          
                        localStorage.setItem('isLogined','1');
                        this.$router.push('/');
                        }
                    });
                //  this.$store.dispatch('login',obj);
                 console.log(obj);
            }
        }
    },
    mounted(){
        // getLogin("","","").then(res=>{
        //     console.log(res);
        // })
    }
}
</script>