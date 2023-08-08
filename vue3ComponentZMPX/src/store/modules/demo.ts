import { defineStore } from 'pinia'
import type { IQueryParams, IRoleInfo } from '@/types/system/role'
import type { IMenuTreeSelect } from '@/types/system/menu'

const useDemo = defineStore('demo', {
  state: () => ({
    // 查询参数 理论上不用指定字段了，这里指定字段是为了给默认值
    queryParams: <IQueryParams>{ pageNum: 1, pageSize: 10 },
    // table 表格列表
    tableList: <IRoleInfo[]>[],
    // 当前项
    currentRowInfo: <IRoleInfo>{},
    loading: false,
    // dialog字段
    title: '',
    open: false,
    menuOptions: <IMenuTreeSelect[]>[],
    addFlag: 0,
    updateFlag: 0,
    deleteFlag: 0,
    viewFlag: 0,
    editCodeFlag: 0
  })
})

export default useDemo
