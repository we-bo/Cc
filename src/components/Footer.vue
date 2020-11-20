<template>
    <div>
        <mt-tabbar v-model="tabbar" fixed>
            <mt-tab-item id="bookshelf">
                书架
                <img src="../assets/images/sjenabled.png" alt="" v-if="tabbar=='bookshelf'" slot="icon">
                <img src="../assets/images/sjdisabled.png" alt="" v-else slot="icon">
            </mt-tab-item>
            <mt-tab-item id="index">
                书城
                <img src="../assets/images/sy_enabled.png" alt="" v-if="tabbar=='index'" slot="icon">
                <img src="../assets/images/sy_disabled.png" alt="" v-else slot="icon">
            </mt-tab-item>
            <mt-tab-item id="me">
                我的
                <img src="../assets/images/wd_enabled.png" alt="" v-if="tabbar=='me'" slot="icon">
                <img src="../assets/images/wd_disabled.png" alt="" v-else slot="icon">
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style>
    .mint-tabbar > .mint-tab-item.is-selected {
    /* background-color: #eaeaea; */
    color: #900 !important;
}
</style>
<script>
export default {
    data(){
        return{
            tabbar:'index'
        }
    },
    mounted(){
        if(this.$route.path=='/bookshelf'){
            this.tabbar='bookshelf';
        }else if(this.$route.path=='/me'){
            this.tabbar='me';
        }else{
            this.tabbar='index';
        }
    },
    watch:{
        tabbar(value){
            if(value=='index'){
                this.$router.push('/');
            }
            if(value=='bookshelf'){
                this.tabbar=value;
                this.$router.push('/bookshelf');
            }
            if(value=='me'){
                this.tabbar=value;
                this.$router.push('/me');
            }
        },
        '$route': {
		deep: true,
		handler(to,from) {
			if(to.path != from.path){
				this.$router.push(to.path);
			}
		}
	}
    }
    
}
</script>