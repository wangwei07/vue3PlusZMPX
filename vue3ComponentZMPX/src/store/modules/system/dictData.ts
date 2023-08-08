import { defineStore } from 'pinia'
import type { IQueryParams, IDictDataInfo } from '@/types/system/dictData'

/* 这里使用了dict2，已经有老的dict用过了。 */
const useDictData = defineStore('dictData', {
  state: () => ({
    // 查询参数 理论上不用指定字段了，这里指定字段是为了给默认值
    queryParams: <IQueryParams>{ pageNum: 1, pageSize: 10 },
    // table 表格列表
    tableList: <IDictDataInfo[]>[],
    // 当前项
    currentRowInfo: <IDictDataInfo>{},
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

export default useDictData
