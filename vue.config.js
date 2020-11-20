module.exports={
    chainWebpack:config=>{
        config.plugins.delete("prefetch")
        //删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://api.zhuishushenqi.com',//真实服务器地址
                changeOrigin:true,//是否跨域
                pathRewrite:{
                    '^/api':''//将程序中的/api，替换为空字符串，在和target中的基础路径拼接起来作为发送到服务器的最终请求地址
                },

            },

            '/bpi':{
                target:'http://localhost:3000',//真实服务器地址
                changeOrigin:true,//是否跨域
                ws:true,
                pathRewrite:{
                    '^/bpi':''//将程序中的/api，替换为空字符串，在和target中的基础路径拼接起来作为发送到服务器的最终请求地址
                }

            }

        }
    },
}