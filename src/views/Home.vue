<template>
  <div class="home">
    <my-carousel></my-carousel>
    <input type="text" placeholder="超凡大卫" class="input" v-model="query" @keydown.13="search">
    <mt-badge size="large" slot="right" color="#ccc" class="badge">书城</mt-badge>
    <div v-for="(item, index) of info" :key="index" class="div_first">
      <p>{{ item.title }}</p>
      <div >
        <div  v-for="(item,index) of item.books" :key="index" >
          <div @click="setVuexData">
            <router-link :to="`/artile/${item._id}`"  class="div_double">
            
              <div class="router_div">
                <img
                  v-lazy="'http://statics.zhuishushenqi.com'+
                  item.cover"
                  alt=""
                />
                </div>
                <div class="subtitle">
                  <p class="div_p">{{item.title }}</p>
                  <p class="subtitle_p">{{item.minorCate }}</p>
                  <p class="subtitle_p">{{item.author }}</p>
                </div>
            
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<style>

*{
  padding: 0;
  margin: 0;
}
.div_first{
  margin-left: 8px;
  margin-top: 28px;
  margin-bottom: 62px;
}
.div_first>p{
  font-size: 20px;
  padding-bottom: 8px;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
}
.div_double{
  display: flex;
  margin-top: 8px;
}
.router_div{
  width: 150px;
  height: 150px;
  border:1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  
}
.router_div>img{
  width: 90%;
  height: 90%;
}
a{
  text-decoration: none;
  color: #999;
  font-weight: 400;
}
.subtitle{
  width: 225px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 10px;
}
.div_p{
  color: black;
  font-weight: 600;
  font-size: 18px;
}
.subtitle_p{
  margin-top: 10px;
}
.input{
  margin-left: 10px;
  margin-top: 4px;
  position: relative;
  top: -126px;
  left: 8px;
  outline: none;
  border: 0px;
  width: 66%;
  border-radius: 25px 25px;
  padding: 0 8px;
  background:rgba(255, 255, 255, 0.5);
}
.badge{
  position: relative;
  top: -126px;
}
.mint-badge.is-primary {
    background-color: #fff;
    color: #d82626;
    margin-left: 30px;
}
</style>
<script>
 import {getIndex,getShow} from '../assets/js/apis/index.js'
export default {
  data() {
    return {
      info: [],
      emp:[],
      lid:'',
      query:''
    };
  },
  mounted() {
    // console.log(lid);
   getIndex().then((res) => {
      this.info = res.epub;
      let temp=[];
      this.info.forEach((item) => {
       getShow(item._id).then((res) => {
          // console.log(res);
          // console.log(item._id);
          let obj = {};
          obj.title = item.title;
          obj.books = res.ranking.books;
          temp.push(obj);
          // console.log(temp)
          this.info=temp;
          // console.log(this.info);
          this.info.forEach(item=>{
            let arr=item.books;
            this.emp=arr;
            // console.log(this.emp);
          });
          this.emp.forEach(item=>{
            let lid=item._id;
            this.lid=lid;
            // console.log(lid);
          })
        });
      });
    });
  },
  methods:{
    setVuexData(){
    //  console.log(123);
     this.$store.dispatch('getData',this.lid);
    },
    search(){
      // console.log(`查询${this.query}相关的内容`);
      this.$router.push('/products/'+this.query);
    }
  },
  created(){
    this.query=this.$route.params.query;
  },
  watch:{
    $route(){
    this.query=this.$route.params.query;
    }
  }
};
</script>
