import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {getArtile} from '../assets/js/apis/index.js'
import qs from 'qs'

Vue.use(Vuex)
export default new Vuex.Store({
  //物品
  state: {
    reviews:[],
    temp:JSON.parse(sessionStorage.getItem('addBookshelf')) || [],
    // MediaCart:JSON.parse(localStorage.getItem('addBookshelf')) || []
    isLogined:localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : 0,
    username:localStorage.getItem('username') ? localStorage.getItem('username') : '',
  },
  //记账员
  getters:{
    // cartProducts:(state,getters)=>{
    //   if(!state.items.length) return[]
    //   return state.items.map(({_id,quantity})=>{
    //     const product=state.temp.find(product=>product._id==_id)
    //     if(!product) return{}
    //     return{
    //       cover:product.cover,
    //       title:product.title,
    //       author:product.author,
    //       _id,
    //       quantity,
    //     }
    //   })
    // }
  },
  //搬运工
  mutations: {
    addProment(state,payload){
      state.reviews.push(payload);
      console.log()
    },
    addBookshelf(state,bookInfo){
      // console.log(state.temp);
      let flag=false;
      state.temp.forEach(i=>{
        if(i._id==bookInfo._id){
          flag=true;
          return flag
        }
      })
      if(flag==false){
        state.temp.push(bookInfo);
        // console.log(state.temp);
      }
            
      
      sessionStorage.addBookshelf=JSON.stringify(state.temp);
      // localStorage.addBookshelf=JSON.stringify(state.MediaCart);
      // console.log(state.MediaCart);
    },
    del(state,index){
      state.temp.splice(index,1);
      sessionStorage.removeItem('temp')
    },
    logined(state,payload){
      state.isLogined = 1;
      console.log(state.isLogined);
      state.username = payload.username;
      localStorage.setItem('username',payload.username);
      console.log(state.username)
    },
    logout(state){
      state.isLogined = 0;
      state.username = '';
      localStorage.removeItem('isLogined');
      localStorage.removeItem('username');
    },
  },
  //拉货的汽车
  actions: {
    getData(context,lid){
      getArtile(lid, "update", 0, 10).then((res) => {
        let reviews = res.reviews;
        for(let n=0;n<reviews.length;n++){
        context.commit('addProment',reviews[n])
        // console.log(reviews);
        }
        // console.log(this.reviews);
      })
    },
    // getBook({state,commit},product){
    //   const cartItem=state.items.find(item=>item._id==product._id)
    //   if(!carItem){
    //     commit('addBookshelf',{_id:product._id})
    //   }else{
    //     commit('addBookshelf',cartItem._id)
    //   }
    // }
    // login(context,payload){
    //   axios.post('/login',qs.stringify(payload)).then(res=>{
    //     //用户登录成功
    //     if(res.data.code==1){
    //       console.log(res.data.results);
    //       //提交Autations
    //       context.commit('logined',res.data.info);
    //       console.log(res.data.results);          
    //       localStorage.setItem('isLogined','1');
    //       router.push('/');
    //     }
    //   });
    // }

  },
  modules: {
    
  }
})
