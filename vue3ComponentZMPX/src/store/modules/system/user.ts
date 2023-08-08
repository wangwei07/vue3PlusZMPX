import { defineStore } from 'pinia'
import type { IQueryParams, ITableInfo } from '@/types/system/user'
import type { IRoleInfo } from '@/types/system/role'

const useManage = defineStore('role', {
  state: () => ({
    // 查询参数 理论上不用指定字段了，这里指定字段是为了给默认值
    queryParams: <IQueryParams>{ pageNum: 1, pageSize: 10 },
    // table 表格列表
    tableList: <ITableInfo[]>[],
    // 当前项
    currentRowInfo: <ITableInfo>{},
    // 角色列表
    roleOptions: <IRoleInfo[]>[],
    loading: false,
    // dialog字段
    title: '',
    open: false,
    addFlag: 0,
    updateFlag: 0,
    deleteFlag: 0,
    viewFlag: 0,
    editCodeFlag: 0
  })
})

export default useManage
