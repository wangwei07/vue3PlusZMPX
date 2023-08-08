import { defineStore } from 'pinia'
import type {
  IQueryParams,
  IMenuInfo,
  IMenuTreeSelect
} from '@/types/system/menu'

const useMenu = defineStore('menu', {
  state: () => ({
    // 查询参数 理论上不用指定字段了，这里指定字段是为了给默认值
    queryParams: <IQueryParams>{ pageNum: 1, pageSize: 10 },
    // table 表格列表
    tableList: <IMenuInfo[]>[],
    // 当前项
    currentRowInfo: <IMenuInfo>{},
    loading: false,
    // dialog字段
    title: '',
    open: false,
    menuOptions: <IMenuTreeSelect[]>[],
    addFlag: 0,
    updateFlag: 0,
    deleteFlag: 0,
    viewFlag: 0,
    addSubFlag: 0
  })
})

export default useMenu
