<template>
  <div class="app-container">
    <QueryCard class="queryCard">
      <Query @handleQuery="handleQuery" />
    </QueryCard>
    <TableCard>
      <template v-slot:header>
        <el-button
          type="primary"
          icon="Plus"
          @click="handleAdd"
          plain
          v-hasPermi="['system:role:add']"
          >新增</el-button
        >
      </template>
      <div class="tabWrap">
        <Table
          class="table"
          :tableList="tableList"
          :loading="loading"
          :currentPage="queryParams.pageNum"
          :pageSize="queryParams.pageSize"
        />
      </div>

      <pagination
        v-show="queryParams.total > 0"
        :total="queryParams.total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
      />
    </TableCard>

    <!-- 添加或修改角色对话框 -->
    <Dialog @getList="getList" />
  </div>
</template>
<script lang="ts" setup>
import Query from './cs/query.vue'
import Table from './cs/table.vue'
import Dialog from './cs/dialog.vue'
import userRole from '@/store/modules/system/role'
import { listRole } from '@/api/system/role'
// 公共数据
const { queryParams, loading, tableList, addFlag } = storeToRefs(userRole())

// 查询表格
function getList() {
  loading.value = true
  listRole(queryParams.value).then((response) => {
    const { rows = [], total = 0 } = response
    tableList.value = rows
    queryParams.value.total = total
    loading.value = false
  })
}

function handleQuery() {
  queryParams.value.pageNum = 1
  getList()
}

// 添加角色
function handleAdd() {
  addFlag.value = +new Date()
}
getList()
</script>
<style lang="scss" scoped>
.queryCard {
  height: 130px;
}
.tabWrap {
  height: calc(100% - 124px);
}
</style>
