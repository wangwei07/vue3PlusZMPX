<template>
  <div>
    <p>你也可以选择多行</p>
    <p>
      实现多选非常简单，手动添加一个el-table-column,设type属性为selection即可
    </p>
    <p>
      除了多选，这里还使用到了show-overflow-tooltip属性，内容情况下，如果单元格内容过长，会占用多行显示
    </p>
    <p>
      若需要单行显示可以使用show-overflow-tooltip属性，它接受一个Boolean，为TRUE时多余的内容会在hover时以tooltip的形式显示出来
    </p>
    <p></p>
  </div>

  <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="Date" width="120">
      <template #default="scope">
        {{ scope.row.date }}
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      show-overflow-tooltip
    ></el-table-column>
  </el-table>

  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])"
      >Toggle selection status of second and third rows</el-button
    >
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value?.toggleRowSelection(row, undefined)
    })
  } else {
    alert(1)
    multipleTableRef.value?.clearSelection()
  }
}

const handleSelectionChange = (val: User[]) => {
  console.log(val, '============123')

  multipleSelection.value = val
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
