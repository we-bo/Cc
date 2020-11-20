<template>
  <div class="content" ref="bgColor">
    <div class="box">
      <div class="swiper-container  swiper-no-swiping">
        <div class="swiper-wrapper">
          <div v-for='(el,index) in arrItem' class="swiper-slide" :key="index">
            <img class="img" :src="el.imgUrl" >
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination swiper-P1"></div>
        <!-- 如果需要导航按钮 -->
        </div>
      </div>
    </div>
</template>

<script>
  //局部引入swiper

import Swiper, { Navigation, Pagination, Autoplay } from "swiper"; 
Swiper.use([Autoplay, Navigation, Pagination]);
  export default {
    name: "HelloWorld",
    data(){
      return{
        arrItem:[
          {
            imgUrl:require('../assets/images/zssq1.jpg')
          },
          {
            imgUrl:require('../assets/images/zssq2.jpg')
          },
          {
            imgUrl:require('../assets/images/zssq3.jpg')
          },
        //   {
        //     name:'swiperSlide1111115',
        //     imgUrl:'../assets/images/zssq1.jpg'
        //   }
        ]

      }
    },
    mounted(){
      const Swiper2= new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: '.swiper-P1',
        autoplay: {
          delay:3000,
          disableOnInteraction: false  //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true  //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        //slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
        effect : 'slide',
        // 如果需要前进后退按钮
      })
      //背景颜色随轮播图片而改变
      const bgColor=this.$refs.bgColor;
      Swiper2.on('slideChangeTransitionEnd', function () {
        if((Swiper2.realIndex)==0){
          bgColor.style.transition="all 0.1s";
          bgColor.style.backgroundColor="#F3BAC1";
        }else if((Swiper2.realIndex)==1){
          bgColor.style.transition="all 0.1s";
          bgColor.style.backgroundColor="#A9282A";
        }else if((Swiper2.realIndex)==2){
          bgColor.style.transition="all 0.1s";
          bgColor.style.backgroundColor="#5496A0";
        }
      });
    },
    methods:{}

  }
</script>
<style scoped>
  .content{
    width:100%;
    background-color: #F3BAC1;
    height: 130px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  .box{
    width:100%;
    margin:0 auto;
    padding:56px  0px;
  }
  .swiper-container{
    width:100%;
    height:130px;
    display: inline-block;
  }
    

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background-size: 20px  20px;
    left: 10px;
    right: auto;
    background-color: black;
    opacity: 0.3;
    width:50px;
    height: 50px;
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 10px;
    background-size: 20px  20px;
    left: auto;
    background-color: black;
    opacity: 0.3;
    width:50px;
    height: 50px;
  }
  .img{
    width:92%;
    margin: 0 15px;
    height:130px;
    border-radius: 8px;
  }


</style>



<!-- 自定义分页器的样式 -->
<style>
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
  }
  .swiper-pagination-bullet-active{
    background-color: #5496A0;
  }
</style>

