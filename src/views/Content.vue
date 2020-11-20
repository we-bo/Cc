<template>
    <div class="content">
        <div v-for="(item,index) of content" :key="index" class="div_first">
            <router-link :to="/chapters/+item._id">
                <p>{{item.lastChapter}}</p>
            </router-link>
            <!-- <router-link :to="item.link">阅读</router-link> -->
        </div>
    </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
}
.content .div_first{
    width: 100%;
    height: 666px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background-color: #d1d6be ;
}
</style>
<script>
import {getContent} from '../assets/js/apis/index.js'
export default {
    data(){
        return{
            content:[]
        }
    },
    methods:{

    },
    mounted(){
        let id=this.$route.params.id;
        console.log(id);
        getContent(id,"summary").then(res=>{
            console.log(res);
            this.content=res;
        })
    }
}
</script>