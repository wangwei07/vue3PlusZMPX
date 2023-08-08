import { defineStore } from 'pinia'
import type { IRoleInfo } from '@/types/system/role'
import type { IMenuTreeSelect } from '@/types/system/menu'

const useRole = defineStore('role', {
  state: () => ({
    // 查询参数
    queryParams: {
      roleName: '',
      roleKey: '',
      status: '',
      params: { beginTime: '', endTime: '' },
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

export default useRole
