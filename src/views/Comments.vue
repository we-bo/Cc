<template>
<div>
    <div  v-for="(item,index) of this.$store.state.reviews" :key="index" class="div_span">
        <div>
            <!-- <img :src="'http://statics.zhuishushenqi.com'+item.author.avatar" alt="">
            <span>{{item.author.nickname}}</span> -->
        </div>
        <!-- <div>{{item.title}}</div> -->
        <div>{{item.content}}</div>
    </div>
</div>
</template>
<style>
.div_span{
  position: relative;
  margin: 10px 16px;
}
.div_span img{
  width: 2rem;
  height: 50%;
  border-radius: 50%;
}
.div_span span{
  position: relative;
  top: -8px;
  left: 6px;
  color: darkgray;
}
.router{
  margin-top: 14px;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
<script>
import {getArtile} from '../assets/js/apis/index.js'
export default {
    data(){
        return{
            reviews:[],
        }
    },
    methods:{

    },
    mounted(){
        let lid=this.$route.params.id;
        console.log(lid);
       getArtile(lid,'update',0,10).then(res=>{
            this.reviews=res.reviews;
            // console.log(this.reviews);
        })
    }
}
</script>