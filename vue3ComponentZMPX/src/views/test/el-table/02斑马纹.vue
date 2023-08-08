<template>
  <div style="color: #fff">
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据</p>

    <p>strip可以创建带斑马纹的表格，如果TRUE，表格将会带有斑马纹</p>
  </div>
  <el-table :data="tableData" style="width: 100%" stripe>
    <el-table-column label="date" prop="date"></el-table-column>
    <el-table-column label="name" prop="name"></el-table-column>
    <el-table-column label="address" prop="name"></el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189' },
  { date: '2016-05-04', name: 'Jack', address: 'No. 190' },
  { date: '2016-05-05', name: 'rose', address: 'No. 190' },
  { date: '2016-05-06', name: 'tuLv', address: 'No. 191' }
]
</script>
