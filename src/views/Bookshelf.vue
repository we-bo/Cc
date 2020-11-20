<template>
    <div class="bookshelf">
        <div v-if="this.count.length">
                <div v-for="(item,index) of this.count" :key="index" >
                    <router-link :to="/artile/+item._id" class="div_first">

                    <div class="div_double">
                        <img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="">
                    </div>
                    <div class="div_p">
                        <p>{{item.title}}</p>
                        <p class="p">{{item.author}}</p>
                        <button @click="del(index)" class="button">不追了</button>
                    </div>
                    </router-link>

                </div>
        </div>
        <div class="like" v-else @click="add">添加喜欢的小说</div>
        <my-footer></my-footer>
    </div>
</template>
<style>
.like{
    width: 37%;
    padding: 4px 12px;
    color: #fff;
    background-color:#d82626 ;
    border-radius: 20px 20px;
    margin: 0 auto;
    margin-top: 50px;
    text-align: center;
}
.bookshelf .div_first{
   display: flex;
   padding-bottom: 6px;
   border-bottom: 1px solid #ccc;
   /* justify-content: space-between; */
}
.bookshelf .div_double{
    width: 30%;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
}
.bookshelf .div_double>img{
    width: 80%;
    height: 110px;
}
.bookshelf .div_p{
    width: 70%;
    margin-top: 18px;
    margin-left: 8px;
}
.bookshelf .p{
    color: #ccc;
}
.bookshelf .button{
    border: 0;
    outline: none;
    background-color: #fff;
    color: #ccc;
}
</style>
<script>

 import {getIndex,getShow} from '../assets/js/apis/index.js'

export default {
    data(){
        return {
            count:this.$store.state.temp,
            lid:''
        }
    },
    methods:{
        add(){
            this.$router.push('/');
        },
        del(index){
            this.$store.commit('del',index)
        }
    },
    computed:{

    },
    mounted(){
        // console.log(this.count);
      
    }
}
</script>