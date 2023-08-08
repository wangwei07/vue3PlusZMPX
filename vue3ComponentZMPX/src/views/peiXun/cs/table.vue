<template>
  <ZmTable
    :loading="loading"
    :data="tableList"
    :header="header"
    :option="option"
  >
    <el-table-column
      label="序号"
      align="center"
      #default="scope"
      fixed="left"
      v-if="false"
    >
      {{ scope.$index + 1 + (queryParams.pageNum - 1) * queryParams.pageSize }}
    </el-table-column>

    <el-table-column
      label="操作"
      align="center"
      #default="scope"
      min-width="100px"
      v-hasPermi="['system:role:edit']"
    >
      <el-button
        icon="Edit"
        v-hasPermi="['system:role:edit']"
        @click="handleUpdate(scope.row)"
        >编辑</el-button
      >
      <el-button
        icon="Edit"
        v-hasPermi="['system:role:edit']"
        @click="handleUpdate(scope.row)"
      ></el-button>
    </el-table-column>
  </ZmTable>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import type { IRoleInfo } from '@/types/system/role'
import useRole from '@/store/modules/system/role'

import Status from './status.vue'

// 组件全局数据
const { queryParams, loading, tableList, updateFlag, currentRowInfo } =
  storeToRefs(useRole())
const { proxy } = getCurrentInstance() as any

// 更新操作项目数据
function handleUpdate(row: IRoleInfo) {
  updateFlag.value = +new Date()
  currentRowInfo.value = row
}

// 表格字段状态格式化
function formatStatus() {
  return Status
}

// 所属角色格式化
function formatRoles() {
  return '需要后台添加此字段，需要后台添加此字段，需要后台添加此字段，'
}

// 表格字段
const header = [
  {
    label: '角色ID',
    prop: 'roleId',
    align: 'center'
  },

  {
    label: '角色名称',
    prop: 'roleName',
    align: 'center'
  },

  {
    label: '人员配置',
    prop: 'roleName',
    align: 'center'
  },

  {
    label: '状态',
    align: 'center',
    prop: 'status',
    useTemplate: true,
    useTemplateRes: formatStatus
  }
]

// 表格配置
const option = {
  fixColNum: 2,
  border: false,
  stripe: false,
  height: '100%',
  loadingShow: true
}
</script>
