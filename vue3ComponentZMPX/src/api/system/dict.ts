import type { IResponseType } from '@/types/interface'
import type { IQueryParams, IDictInfo } from '@/types/system/dict'
import request from '@/utils/request'

// 查询字典类型列表
export function listDict(query: IQueryParams) {
  return request<IResponseType<IDictInfo[]>>({
    url: '/system/dict/type/list',
    method: 'get',
    params: query
  })
}

// 查询字典类型详细
export function getDict(dictId: number) {
  return request<IResponseType<IDictInfo>>({
    url: `/system/dict/type/${dictId}`,
    method: 'get'
  })
}

// 新增字典类型
export function addDict(data: IDictInfo) {
  return request({
    url: '/system/dict/type',
    method: 'post',
    data
  })
}

// 修改字典类型
export function updateDict(data: IDictInfo) {
  return request({
    url: '/system/dict/type',
    method: 'put',
    data
  })
}

// 删除字典类型
export function delDict(dictId: number) {
  return request({
    url: `/system/dict/type/${dictId}`,
    method: 'delete'
  })
}

// 刷新字典缓存
export function refreshCache() {
  return request({
    url: '/system/dict/type/refreshCache',
    method: 'delete'
  })
}

// 获取字典选择框列表
export function optionselect() {
  return request({
    url: '/system/dict/type/optionselect',
    method: 'get'
  })
}

// 字典状态修改
export function changeDictStatus(dictId: number, status: string) {
  const data = {
    dictId,
    status
  }
  return request({
    url: '/system/dict/type/status',
    method: 'put',
    data
  })
}
