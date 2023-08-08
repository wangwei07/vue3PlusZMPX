import request from '@/utils/request'
import type { IResponseType } from '@/types/interface'
import type {
  IMenuTreeSelect,
  IQueryParams,
  IMenuInfo
} from '@/types/system/menu'

// 查询菜单列表
export function listMenu(query?: IQueryParams) {
  return request<IResponseType<IMenuInfo[]>>({
    url: '/system/menu/list',
    method: 'get',
    params: query
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: `/system/menu/${menuId}`,
    method: 'get'
  })
}

// 查询菜单下拉树结构
export function treeselect() {
  return request<IResponseType<IMenuTreeSelect[]>>({
    url: '/system/menu/treeselect',
    method: 'get'
  })
}

// 根据角色ID查询菜单下拉树结构
// export function roleMenuTreeselect(roleId) {
//   return request({
//     url: `/system/menu/roleMenuTreeselect/${roleId}`,
//     method: 'get'
//   })
// }

export const roleMenuTreeselect = (roleId: number) =>
  request<IResponseType<IMenuTreeSelect[]>>({
    url: `/system/menu/roleMenuTreeselect/${roleId}`,
    method: 'get'
  })

// 新增菜单
export function addMenu(data) {
  return request({
    url: '/system/menu',
    method: 'post',
    data
  })
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: '/system/menu',
    method: 'put',
    data
  })
}

// 删除菜单
export function delMenu(menuId) {
  return request({
    url: `/system/menu/${menuId}`,
    method: 'delete'
  })
}
