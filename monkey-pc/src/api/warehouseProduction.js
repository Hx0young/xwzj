import { axios } from '@/utils/request'
//原辅料入库--start
export function materialTypeAndHouse(parameter) {//物料类型以及库房信息
  return axios({
    url: '/material/materialTypeAndHouse',
    method: 'get',
  })
}

export function allMaterialNameLike(name) {//模糊查询类型下的物料名称
  return axios({
    url: `/material/allMaterialNameLike?materialName=${name}`,
    method: 'get',
  })
}
export function materialByType(type) {//添加原辅料页面选择物料类型去查询物料名称--原料--辅料
  return axios({
    url: `/material/materialByType?type=${type}`,
    method: 'get',
  })
}
export function packgeCodeByName(type) {//添加原辅料页面选择物料类型去查询物料名称--包材
  return axios({
    url: `/material/packgeCodeByName?packgeName=${type}`,
    method: 'get',
  })
}
export function addMaterialInStoreMsg(data) {//添加原辅料页面提交表单
  return axios({
    url: `/material_in/addMaterialInStoreMsg`,
    method: 'post',
    data
  })
}
export function addSmap(data) {//添加原辅料页面提交表单
  return axios({
    url: `material_in/addSmap`,
    method: 'post',
    data
  })
}
export function unit() {//添加原辅料页面查询单位
  return axios({
    url: `material/unit`,
    method: 'get',
  })
}
export function getListKuka(obj) {//添加原辅料页面点击详情得到库卡
  return axios({
    url: `material_in/getListKuka`,
    method: 'get',
    params:obj
  })
}






  










































//原辅料入库--end
//生产指令已经领料--start
export function addProductOrder(data) {//添加操作
  return axios({
    url: `/product_order/addProductOrder`,
    method: 'post',
    data
  })
}
export function getProductName(data) {//添加操作--查询产品名称
  return axios({
    url: `/product_order/getProductName`,
    method: 'get'
  })
}
export function getSpecis(productName) {//添加操作--选择了产品名称过后去查询接口
  return axios({
    url: `/product_order/getSpecis?productName=${productName}`,
    method: 'get',
    
  })
}
export function getProductOne(id) {//表格点击详情通过id请求接口
  return axios({
    url: `/product_order/getProductOne?id=${id}`,
    method: 'get',
    
  })
}
export function updatePart(data) {//添加理论量
  return axios({
    url: `/product_order/updatePart`,
    method: 'post',
    data
    
  })
}
export function updatePart1(data) {//发料操作
  return axios({
    url: `/product_order/updatePart1`,
    method: 'post',
    data
    
  })
}
export function getInStoreNo(materialCode) {//发料操作--获取批号
  return axios({
    url: `/product_order/getInStoreNo?materialCode=${materialCode}`,
    method: 'get'
    
  })
}











































//生产指令已经领料--end
//成品记录--start












































//成品记录--end
//销售记录--start












































//销售记录--end
//退货明细--start












































//退货明细--end