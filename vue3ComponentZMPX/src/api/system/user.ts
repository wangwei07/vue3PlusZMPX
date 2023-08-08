import request from '@/utils/request'
import type { IRoleInfo } from '@/types/system/role'

import { parseStrEmpty } from '@/utils/ruoyi'

import type { IResponseType } from '@/types/interface'
import type { IQueryParams, ITableInfo } from '@/types/system/user'

// 查询用户列表
export function listUser(query: IQueryParams) {
  return request<IResponseType<ITableInfo[]>>({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getUser(userId?: number) {
  return request<IResponseType<IRoleInfo[] | ITableInfo | number[]>>({
    url: `/system/user/${parseStrEmpty(userId)}`,
    method: 'get'
  })
}

// 新增用户
export function addUser(data: ITableInfo) {
  return request({
    url: '/system/user',
    method: 'post',
    data
  })
}

// 修改用户
export function updateUser(data: ITableInfo) {
  return request({
    url: '/system/user',
    method: 'put',
    data
  })
}

// 删除用户
export function delUser(userId: number) {
  return request({
    url: `/system/user/${userId}`,
    method: 'delete'
  })
}

// 用户密码重置
export function resetUserPwd(userId?: number, password?: string) {
  const data = {
    userId,
    password
  }
  return request({
    url: '/system/user/resetPwd',
    method: 'put',
    data
  })
}

// 用户状态修改
export function changeUserStatus(userId: string, status: string) {
  const data = {
    userId,
    status
  }
  return request({
    url: '/system/user/changeStatus',
    method: 'put',
    data
  })
}

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/system/user/profile',
    method: 'get'
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/system/user/profile',
    method: 'put',
    data
  })
}

// 用户密码重置
export function updateUserPwd(oldPassword: string, newPassword: string) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    params: data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return request({
    url: '/system/user/profile/avatar',
    method: 'post',
    data
  })
}

// 查询授权角色
export function getAuthRole(userId: string) {
  return request({
    url: `/system/user/authRole/${userId}`,
    method: 'get'
  })
}

// 保存授权角色
export function updateAuthRole(data) {
  return request({
    url: '/system/user/authRole',
    method: 'put',
    params: data
  })
}
