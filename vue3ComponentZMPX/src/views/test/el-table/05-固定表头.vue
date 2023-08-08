<template>
  <div>
    <p>纵向内容过多时，可选择固定表头</p>
    <p>
      只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码
    </p>
  </div>
  <el-table :data="tableData" style="width: 100%" height="300">
    <el-table-column prop="date" label="Data"></el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column prop="address" label="Address"></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  },
  {
    date: '2016-05-3',
    name: 'jack',
    address: 'No.1'
  }
]
</script>
