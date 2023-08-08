/** 字典数据查询参数数据类型 */
export interface IQueryParams {
  dictType: string
  dictLabel: string
  status: string
  pageNum: number
  pageSize: number
  total: number
}

/** 字典数据全部数据类型 */
export interface IDictDataInfo {
  // 创建人
  createBy: string
  // 创建时间
  createTime?: string
  // 样式属性
  cssClass?: string
  // 未知2
  default: boolean
  // 字典编码（字典ID）
  dictCode: number
  // 字典标签
  dictLabel: string
  // 字典排序
  dictSort: string
  // 字典类型
  dictType: string
  // 数据键值
  dictValue: string
  // 未知3 样式，成功，主要，信息，警告，尾箱
  listClass?: string
  // 备注
  remark: string
  // 状态
  status: string
}
