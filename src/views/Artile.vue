<template>
  <div class="artile">
    <my-header></my-header>
    <div class="div_sort">
      <div class="div_img">
        <img
          :src="'http://statics.zhuishushenqi.com' + bookInfo.cover"
          alt=""
        />
      </div>
      <div class="div_book">
        <router-link :to="/content/+lid">
          <p class="div_p">{{ bookInfo.title }}</p>
          <p class="poos">{{ bookInfo.author }}</p>
          <p class="poos">5书币/千字:{{ bookInfo.wordCount }}</p>
        </router-link>
      </div>
    </div>
    <div class="div_h3">
      <h3>简介</h3>
      <span>{{ bookInfo.longIntro }}</span>
    </div>
    <div class="div_h3">
      <div class="read">
        <h3>热书书评</h3>
        <router-link :to="`/Commentary/${lid}`">写书评</router-link>
      </div>

      <div v-if="this.$store.state.reviews.length">
        <div v-for="(item, index) of this.$store.state.reviews" :key="index" class="div_span">
          <div>
            <!-- <img
              :src="'http://statics.zhuishushenqi.com' + item.author.avatar"
              alt=""
            />
            <span>{{ item.author.nickname }}</span> -->
          </div>
          <!-- <div>{{ item.title }}</div> -->
          <div>{{ item.content }}</div>
        </div>
      </div>
      <div v-else>暂无评论,抢沙发</div>
      <div class="router" v-if="this.$store.state.reviews.length">
        <router-link :to="'/comments/' + bookInfo._id">
          查看所有评论
        </router-link>
      </div>
    </div>
    <div class="message">
      <p class="model" @click="add(bookInfo)" >追更新</p>
      <p class="model_p">开始阅读</p>
      <p class="message_p">下载</p>
    </div>
  </div>
</template>
<style>
.artile {
  margin: 4px 10px;
}
.div_sort {
  display: flex;
  margin-top: 8px;
}
.div_img > img {
  width: 8rem;
  height: 100px;
  margin-left: 8px;
}
.div_book {
  margin-left: 8px;
  font-weight: 400;
}
.div_p {
  color: black;
}
.poos {
  margin-top: 10px;
  color: black;
}
.div_h3 {
  margin-top: 10px;
}
.div_span {
  margin-top: 10px;
  position: relative;
}
.div_span img {
  width: 2rem;
  height: 50%;
  border-radius: 50%;
}
.div_span span {
  position: relative;
  top: -8px;
  left: 6px;
  color: darkgray;
}
.router {
  margin-top: 14px;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 50px;
}
.read {
  display: flex;
  justify-content: space-between;
}
.message{
  width: 95%;
  height: 40px;
  background-color: #ccc;
  line-height: 40px;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  display: flex;
}
.model{
  color: #fff;
  margin-left: 6px;
  margin-right: 91px;
}
.message .model_p{
  height: 100%;
  background-color: #d82626;
  color: #fff;
  padding: 0 8px;
  margin-right: 91px;
}
.message_p{
  color: #fff;
  margin-left: -14px;
}
</style>
<script>
import { Artile, getArtile,getSearch,getShow,getIndex } from "../assets/js/apis/index.js";
export default {
  data() {
    return {
      bookInfo: {},
      reviews: [],
      lid:'',
      temp:[],
      count:this.$store.state.temp,
      _le:''
    };
  },
  methods: {
    // ss(){
    //   console.log(this.$store.state.reviews)
    // }
    add(bookInfo){
      //  getIndex().then((res) => {
      //   this.info = res.epub;
      //   let temp=[];
      //   this.info.forEach((item) => {
      //   getShow(item._id).then((res) => {
      //       // console.log(res);
      //       // console.log(item._id);
      //       // let obj = {};
      //       // obj.title = item.title;
      //       temp = res.ranking.books;
      //       // console.log(temp);
      //       temp.forEach(item=>{
      //         this.temp.push(item)
      //       })
      //       // console.log(obj);
      //       // temp.push(obj);
      //       // this.temp=temp
      //       })
      //     })
      //   })
      // console.log(this.temp);
      //   this.temp.forEach(item=> {
      //   let obj={};
      //   // obj.title=item.title;
      //   obj.books=item.books;
      //   this.temp.push(obj);
      //   // console.log(state.temp);
      // });
      // this.temp.forEach(item=>{
      //   item.books.forEach(item=>{
      //     this.temp.push(item);
      //   })
      // })
      // console.log(this.temp);
      // console.log(bookInfo);
      this.$store.commit('addBookshelf',bookInfo)
      this.$router.push('/bookshelf')
    },

  },
  mounted() {
    // console.log(this.count);
    // console.log(this.$route.params.id)
    let lid = this.$route.params.id;
    this.lid=lid;
    // console.log(lid);
    Artile(lid).then((res) => {
      // console.log(res);
      this.bookInfo = res;
      // console.log(this.bookInfo._id);
    });
    // getArtile(lid, "update", 0, 10).then((res) => {
    //   this.reviews = res.reviews;
    //   console.log(this.reviews);
    // });
    // let query=this.$route.params.query;
    // console.log(query);
    // getSearch(query,1,20).then(res=>{
    //   console.log(res);
    // })
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  computed: {},
  created() {},
};
</script>
