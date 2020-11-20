<template>
    <div class="products">
        <my-header></my-header>
        <div v-for="(item,index) of books" :key="index" >
            <router-link :to="`/artile/${item._id}`" class="first">
                <div class="div_img">
                    <img class="img" :src="'http://statics.zhuishushenqi.com'+item.cover" alt="">
                </div>
                <div class="div_double">
                    <p>{{item.title}}</p>
                    <p class="p_double">{{item.shortIntro}}</p>
                    <div class="div_span">
                        <span>{{item.author}}</span>
                        <span class="span_double">{{item.cat}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<style>
.products .first{
    display: flex;
    justify-content: space-between;
}
.products .div_img{
    width: 30%;
    height: 140px;
    /* border:1px solid #ccc; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
.img{
    width: 95px;
    height: 122px;
}
.products .p_double{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.products .div_double{
    width: 70%;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
}
.products .div_span{
    margin-right: 8px;
    display: flex;
    justify-content: space-between;
}
.products .span_double{
    padding: 1px 6px;
    border: 1px solid #ccc;
    border-radius: 4px 4px;
}
</style>
<script>
import {getSearch} from '../assets/js/apis/index.js'
export default {
    data(){
        return{
            books:[]
        }
    },
    methods:{

    },
    created(){

    },
    mounted(){
        let query=this.$route.params.query;
        console.log(query);
        getSearch(query,1,20).then(res=>{
            console.log(res);
            this.books=res.books;
        })
    },

}
</script>