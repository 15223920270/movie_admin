import Axios from  './axios'

const  instance = Axios();

export default {
    get(url,params,headers){
        return instance.get(url,{params,headers})
    },
    post(url,params,headers){
        return instance.post(url,params,{headers})
    },
    put(url,params,headers){
        return instance.put(url,params,{headers})
    },
    delete(url,params,headers){
        return instance.delete(url,{params,headers})
    }
}