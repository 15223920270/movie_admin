import axios from "axios";

const initAxios = axios({
    timeout: 1800000
})
//请求拦截qi
initAxios.interceptors.request.use((config) =>{
        //在发送之前做什么
        return config;
    },(error)=> {
        return error;
    }
)

//响应拦截器
initAxios.interceptors.response.use((response)=>{
    if (response.resultCode === 200){
        return response.data
    }else{
        return {resultCode:-1}
    }
})

export default () => initAxios