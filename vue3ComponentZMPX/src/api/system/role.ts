import type { IResponseType } from '@/types/interface'
import type { IQueryParams, IRoleInfo } from '@/types/system/role'
import request from '@/utils/request'

export const listRole = (query: IQueryParams) =>
  request<IResponseType<IRoleInfo[]>>({
    url: '/system/role/list',
    method: 'get',
    params: query
  })

// 查询角色详细
export function getRole(roleId: number) {
  return request<IResponseType<IRoleInfo>>({
    url: `/system/role/${roleId}`,
    method: 'get'
  })
}

// 新增角色
export function addRole(data: IRoleInfo) {
  return request({
    url: '/system/role',
    method: 'post',
    data
  })
}

// 修改角色
export function updateRole(data: IRoleInfo) {
  return request({
    url: '/system/role',
    method: 'put',
    data
  })
}

// 角色状态修改
export function changeRoleStatus(roleId: number, status: string) {
  const data = {
    roleId,
    status
  }
  return request({
    url: '/system/role/changeStatus',
    method: 'put',
    data
  })
}

// 删除角色
export const delRole = (roleIds: string) =>
  request<IResponseType>({
    url: `/system/role/${roleIds}`,
    method: 'delete'
  })
