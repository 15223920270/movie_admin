import service from '../service/service'

//声明接口变量
let baseURL;
//配置开发环境
if (process.env.NODE_ENV === 'development'){
    baseURL = 'http://127.0.0.1:8777';
}

//设置请求头（如果请求头统一的话可以在axios文件设置，则无须从这里传过去）
const header = {
    Accept: 'application/json;charset=UTF-8',
}

//根据自身需求
let _service={
    getList(data) {
        const url = baseURL + 'index/getList';
        return service.post(url, data, header);
    }
}


//导出
export default _service