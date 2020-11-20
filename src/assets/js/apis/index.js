import axios from 'axios'
import {baseURL} from '../config.js'
import qs from 'qs'
function getIndex(){
    return new Promise(
        function(resolve,reject){
            axios.get("/api/ranking/gender").then(res=>{
                resolve(res.data)
            })
        }
    )
}
function getShow(id){
    return new Promise(
        function(resolve,reject){
            axios.get(`/api/ranking/${id}`).then(res=>{
                resolve(res.data)
            })
        }
    )
}

function Artile(lid){
    return new Promise(
        function(resolve,reject){
            axios.get('/api/book/'+ lid).then(res=>{
                resolve(res.data)
            })
        }
    )
}

function getArtile(book,sort,start,limit){
    return new Promise(
        function(resolve,reject){
            axios.get('/api/post/review/by-book',{
                params:{
                  book,
                  sort,
                  start,
                  limit
                }
              }).then(res=>{
                  resolve(res.data)
              })
        }
    )
}


function getSearch(query,start,limit){
    return new Promise(
        function(resolve,reject){
        axios.get('/api/book/fuzzy-search',{
            params:{
                query,
                start,
                limit
            }
        }).then((res)=>{
            resolve(res.data)
        })
        }
    )
}


function getLogin(platform_uid,platform_token,platform_code){
    return new Promise(
        function(resolve,reject){
            axios.get('/api/user/login',{
                params:{
                    platform_uid,
                    platform_token,
                    platform_code
                }
            }).then(res=>{
                resolve(res.data)
            })
        }
    )
}


function getContent(book,view){
    return new Promise(
        function(resolve,reject){
            axios.get('/api/btoc',{
                params:{
                    book,
                    view
                }
            }).then(res=>{
                resolve(res.data)
            })
        }
    )
}


function getChapters(sourceid,view){
    return new Promise(
        function(resolve,reject){
            axios.get('/api/atoc',{
                params:{
                    sourceid,
                    view
                }
            }).then(res=>{
                resolve(res.data);
            })

        }
    )
}

function getRegister(username,password){
    return new Promise(
        function(resolve,reject){
            axios.post('/register',qs.stringify({
                params:{
                    username,
                    password
                }
            })).then(res=>{
                resolve(res.data)
            })
        }
    )
}

export{
    getIndex,
    getShow,
    Artile,
    getArtile,
    getSearch,
    getLogin,
    getContent,
    getChapters,
    getRegister
}