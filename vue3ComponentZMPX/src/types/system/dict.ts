interface IQueryTime {
  beginTime: string
  endTime: string
}
/** 字典查询参数数据类型 */
export interface IQueryParams {
  dictName: string
  status: string
  pageNum: number
  pageSize: number
  total: number
  params: IQueryTime
}

/** 字典全部数据类型 */
export interface IDictInfo {
  // 创建人
  createBy: string
  // 创建时间
  createTime?: string
  // 字典ID
  dictId: number
  // 字典名称
  dictName: string
  // 字典类型
  dictType: string
  // 备注
  remark: string
  // 状态
  status: string
}
