<template>
    <div>
        <mt-header>
            <router-link slot="left" to="/">
                <mt-button icon="back"></mt-button>
                <mt-button>编辑短评</mt-button>
            </router-link>
            <mt-button slot="right" @click="add()">发送</mt-button>
        </mt-header>
        <div id="box">
            <div v-for="(n,index) of 5 " :key="index"  @click="Selected(n)" :class="{on:cur>=n}"></div>
        </div>
        <div>
            <hr>
            <textarea id="textarea" cols="45" rows="10" v-model="row" maxlength="50"  placeholder="请简明扼要的概括这本书，字数控制在50字以内，也可以直接评分，跳过填写内容并发布"></textarea>
            <span class="span">{{this.row.length}}/50</span>
            <hr>
        </div>
        <div class="zhi">
            <span>遵守</span>
            <p>《知书社区公告》</p>
            <span>营造良好社区氛围</span>
        </div>
    </div>
</template>
<style>
.mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    color: #900;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}
#box{
    display: flex;
    justify-content: center;
}
#box .on{
    background: url('../assets/images/xx_enabled.png') no-repeat;
}
#box div{
    width: 40px;
    height: 59px;
    background: url('../assets/images/xx_disabled.png') no-repeat;
}
#textarea{
    border: 0;
    outline: none;
    padding: 4px 4px;
}
.span{
    color: #ccc;
    position: relative;
    left: 307px;
    bottom: 4px;
}
.zhi{
    position: fixed;
    bottom: 10px;
    display: flex;
    margin-left: 72px;
    justify-content: center;
    font-size: 12px;
}
.zhi>p{
    color: #900;
}
</style>
<script>

export default {
    data(){
        return {
            cur : 0,
            row:"",
            lid:''
        }
    },
    methods:{     
        Selected(n){
            this.cur = n;
        },
        add(row){
            let obj={
                content:this.row
            }
            this.$store.commit('addProment',obj)
            this.$router.push(`/artile/${this.lid}`)
        }
    },
    mounted(){
        let lid=this.$route.params.lid;
        this.lid=lid;
        console.log(lid);
    },
    watch:{
        row(){
        //    this.ss=this.row.length;
        }
    }
}
</script>