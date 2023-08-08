<template>
  <div style="color: #fff">
    <p>
      用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作
    </p>
    <p>基础的表格展示用法</p>
    <p>
      当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名,可以使用width属性来定义列宽
    </p>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="date" prop="date"></el-table-column>
    <el-table-column label="name" prop="name"></el-table-column>
    <el-table-column label="address" prop="name"></el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
const tableData = [
  { date: '2016-05-03', name: 'Tom', address: 'No. 189' },
  { date: '2016-05-04', name: 'Jack', address: 'No. 190' }
]
</script>
