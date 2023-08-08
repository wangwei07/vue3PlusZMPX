import { defineStore } from 'pinia'
import type { IRoleInfo } from '@/types/system/role'
import type { IMenuTreeSelect } from '@/types/system/menu'

const useMange = defineStore('mange', {
  state: () => ({
    // 查询参数
    queryParams: {
      userName: '',
      status: '',
      roleIds: '',
      pageNum: 1,
      pageSize: 10
    },
    // 列表
    currentRowInfo: <IRoleInfo>{},
    ids: <(number | undefined | null)[]>[],
    // dialog字段
    title: '',
    open: false,
    menuOptions: <IMenuTreeSelect[]>[],
    addFlag: 0,
    updateFlag: 0,
    deleteFlag: 0
  })
})

export default useMange
