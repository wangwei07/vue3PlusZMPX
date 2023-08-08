// TODO 试验阶段

import { defineStore } from 'pinia'
import type { IQueryParams, ITableInfo } from '@/types/system/user'

const useCommon = defineStore('role', {
  state: () => ({
    // 查询参数
    queryParams: <IQueryParams>{},
    // 列表
    currentRowInfo: <ITableInfo>{},
    ids: <(number | undefined | null)[]>[],
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

export default useCommon
