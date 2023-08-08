<template>
  <div>
    <p>选择单行数据时使用色块表示</p>
    <p>
      table组件提供了单选的支持，只需要配置hightLight-current-row属性即可实现单选，之后current-change事件来管理选中时触发的事件
    </p>
    <p>它会传入currentRow,oldCurrentRow</p>
    <p>
      如果需要显示索引，可以增加一列，el-table-column,设置type属性为index，即可显示从1开始的索引号
    </p>
  </div>

  <el-table
    ref="singleTableRef"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
    <el-table-column type="index" width="50" />
    <el-table-column property="date" label="Date" width="120" />
    <el-table-column property="name" label="Name" width="120" />
    <el-table-column property="address" label="Address" />
  </el-table>
  <div style="margin-right: 20px">
    <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
    <el-button @click="setCurrent()">Clear selection</el-button>
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

const currentRow = ref()
const singleTableRef = ref<InstanceType<typeof ElTable>>()

const setCurrent = (row?: User) => {
  singleTableRef.value!.setCurrentRow(row)
}
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No.1'
  }
]
</script>
