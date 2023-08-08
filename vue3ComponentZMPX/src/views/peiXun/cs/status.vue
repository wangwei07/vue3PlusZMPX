<template>
  <div>
    <el-switch
      v-model="row.status"
      active-value="0"
      inactive-value="1"
      @change="handleStatusChange(row)"
    ></el-switch>
  </div>
</template>

<script setup lang="ts">
import { IRoleInfo } from '@/types/system/role'
import { changeRoleStatus } from '@/api/system/role'

// 这里没有使用pinia，目的为了记录defineProps接收对象类型，
const props = defineProps<{ row: IRoleInfo }>()
const row = computed(() => props.row)
const { proxy } = getCurrentInstance() as any

/** 用户状态修改  */
function handleStatusChange(row: IRoleInfo) {
  const text = row.status === '0' ? '启用' : '停用'
  proxy.$modal
    .confirm(`确认要"${text}""${row.roleName}"用户吗?`)
    .then(() => changeRoleStatus(row.roleId, row.status))
    .then(() => {
      proxy.$modal.msgSuccess(`${text}成功`)
    })
    .catch(() => {
      // eslint-disable-next-line no-param-reassign
      row.status = row.status === '0' ? '1' : '0'
    })
}
</script>
