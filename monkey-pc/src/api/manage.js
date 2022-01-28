import { axios } from '@/utils/request'

const api = {
  user: '/api/user',
  role: '/api/role',
  service: '/api/service',
  permission: '/api/permission',
  permissionNoPager: '/api/permission/no-pager',
  deptAddUrl:'/unit/listUnit',
  submitAddDept:'/unit/addUnit',
  deleteDept:'/unit/deleteUnit/',
  editDept:'/unit/listUnitById',
  updateDept:'/unit/updateUnit'

}

export default api

//postActionByParams
export function postActionByParams(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    params: parameter
  })
}

//post
export function postAction(url, parameter) {
  return axios({
    url: url,
    method: 'post',
    data: parameter
  })
}

//post method= {post | put}
export function httpAction(url, parameter, method) {
  return axios({
    url: url,
    method: method,
    data: parameter
  })
}

//put
export function putAction(url, parameter) {
  return axios({
    url: url,
    method: 'put',
    data: parameter
  })
}

//get
export function getAction(url, parameter) {
  return axios({
    url: url,
    method: 'get',
    params: parameter
  })
}

//deleteAction
export function deleteAction(url, parameter) {
  return axios({
    url: url,
    method: 'delete',
    params: parameter
  })
}

export function getUserList(parameter) {
  return axios({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getRoleList(parameter) {
  return axios({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList(parameter) {
  return axios({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions(parameter) {
  return axios({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService(parameter) {
  return axios({
    url: api.service,
    method: parameter.id == 0 ? 'post' : 'put',
    data: parameter
  })
}
//单位管理4月19日上午jdd获取表格
export function deptAdd(parameter) {
  let obj={
    pageNo:parameter.current,
    pageSize:parameter.pageSize
  }
  return axios({
    url: api.deptAddUrl,
    method: 'get',
    params:obj
    
  })
}
//单位管理4月19日上午jdd新增--新增右侧弹窗提交按钮
export function submitAddDept(data) {
  return axios({
    url: api.submitAddDept,
    method: 'POST',
    data:data
    
  })
}
//单位管理4月19日上午jdd删除--单位管理删除按钮
export function deleteDept(id) {
  return axios({
    url: api.deleteDept+id,
    method: 'get',
    
  })
}
//单位管理4月19日上午jdd编辑--单位管理点击编辑按钮获取单位信息
export function editDept(id) {
  return axios({
    url: api.editDept,
    method: 'get',
    params:id
    
  })
}
//单位管理4月19日上午jdd编辑--单位管理点击编辑按钮提交更新单位信息
export function updateDept(data) {
  return axios({
    url: api.updateDept,
    method: 'post',
    data:data
    
  })
}
/**
 * 下载文件 用于excel导出
 * @param url
 * @param parameter
 * @returns {*}
 */
export function downFile(url, parameter) {
  return axios({
    url: url,
    params: parameter,
    method: 'get',
    responseType: 'blob'
  })
}
