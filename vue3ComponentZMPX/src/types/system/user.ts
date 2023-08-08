/** 用户查询参数数据类型 */
export interface IQueryParams {
  userName: string
  status: string
  pageNum: number
  pageSize: number
  total: number
  roleId: string
}

/** 用户table数据类型 */
export interface ITableInfo {
  // 用户ID
  userId: number
  // 用户名 (登录的用户名，nickName是用户昵称)
  userName: string
  // 用户昵称 (登录的用户名，nickName是用户昵称)
  nickName: string
  // 密码
  password?: string
  // 角色
  roleIds: number[]
  // 用户状态
  status: string
  // 注册时间
  createTime: string
  // 最后登录时间
  loginDate: string
  // 备注
  remark: string
}
