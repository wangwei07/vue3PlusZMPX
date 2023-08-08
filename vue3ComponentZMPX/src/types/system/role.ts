/** 角色查询参数数据类型 */
export interface IQueryParams {
  roleName: string
  roleKey?: string
  pageNum: number
  pageSize: number
  total: number
}

/** 角色全部数据类型 */
export interface IRoleInfo {
  // 角色ID
  roleId: number
  // 角色名称
  roleName: string
  // 权限字符
  roleKey?: string
  // 角色名称排序
  roleSort?: number
  // 备注
  remark: string
  // 人员配置
  memberConfig: string[]
  // 角色状态
  status: string
  menuIds: number[]
}
