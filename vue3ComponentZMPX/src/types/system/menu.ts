interface IQueryTime {
  beginTime: string
  endTime: string
}
/** 角色查询参数数据类型 */
export interface IQueryParams {
  menuName: string
  status: string
  roleKey?: string
  pageNum: number
  pageSize: number
  total: number
  params: IQueryTime
}

/** 菜单全部数据类型 */
export interface IMenuInfo {
  // 菜单ID
  menuId: number
  // 父级ID
  parentId: number
  // 菜单类型
  menuType: string
  // 子节点
  children: IMenuInfo[]
  // 组件路径
  component: string
  // 路由地址
  path: string
  // 创建时间
  createTime?: string
  // 菜单名称
  menuName: string
  // 图标
  icon?: string
  // 是否外链
  isFrame: string
  // 排序
  orderNum?: number
  // 权限标识 (啥玩意应该没有用)
  perms?: string
  // 菜单状态 选择停用则路由将不会出现在侧边栏，也不能被访问
  status: string
}

/* 查询菜单树结构 这里没有传roleId，但是后台应该是根据roleId查询了 */
export interface IMenuTreeSelect {
  children: IMenuTreeSelect[]
  menuId: number
  label?: string
  menuName?: string
}
