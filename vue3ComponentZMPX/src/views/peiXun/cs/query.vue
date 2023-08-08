<template>
  <el-form :model="queryParams" ref="queryRef" :inline="true">
    <el-form-item label="角色名称" prop="roleName">
      <el-input
        v-model="queryParams.roleName"
        placeholder="请输入角色名称"
        clearable
        @keyup.enter="handleQuery"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="handleQuery"
        v-hasPermi="['system:user:query']"
        >搜索</el-button
      >
      <el-button @click="resetQuery">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import usRole from '@/store/modules/system/role'

// 组件全局数据

const emits = defineEmits(['handleQuery', 'restQuery'])
const { queryParams } = storeToRefs(usRole())

// 搜索
emits('handleQuery')
function handleQuery() {
  emits('handleQuery')
}

// 重置
const queryRef = ref()
function resetQuery() {
  queryRef.value.resetFields()
  nextTick(() => {
    handleQuery()
  })
}
</script>
