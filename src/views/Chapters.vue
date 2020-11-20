<template>
    
</template>
<style>

</style>
<script>
import {getChapters} from '../assets/js/apis/index.js'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        let id=this.$route.params.sourceid;
        console.log(id);
        getChapters(id,"chapters").then(res=>{
            console.log(res);
        })
    }
}
</script>