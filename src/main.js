import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUi from 'mint-ui';
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.component("my-header",Header);
Vue.component("my-footer",Footer);
Vue.component("my-carousel",Carousel);
//导入mintui样式文件
import 'mint-ui/lib/style.min.css';

Vue.use(VueAwesomeSwiper)
//注册Vue插件
Vue.use(MintUi)
Vue.prototype.qs=qs;
Vue.prototype.axios=axios;
// axios.prototype.baseURL="/api";
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
