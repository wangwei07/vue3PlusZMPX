<template>
  <div style="color: #fff">
    <p>
      默认情况下，table组件是不具有竖直方向边框的，如果需要，可以使用border属性，把该属性设置为TRUE即可启用
    </p>
  </div>
  <el-table :data="tableData" style="width: 100%" stripe border>
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
