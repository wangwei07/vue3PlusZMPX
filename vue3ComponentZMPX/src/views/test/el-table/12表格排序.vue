<template>
  <div>
    <p>对表格进行排序，可快速查找或对比数据</p>
    <p>
      在列中设置 sortable
      属性即可实现以该列为基准的排序，接受一个Boolean，默认为FALSE
    </p>
    <p>可以通过table的default-sort属性设置默认的排序列和排序顺序</p>
    <p>可以使用sort-method或者sort-by使用自定义的排序规则</p>
    <p>
      如果需要后端排序，需将sortable
      设置为custom，同时在table上监听sort-change事件
    </p>
    <p>
      在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据
    </p>
    <p>
      在本例中，我么还使用了formatter属性，它用于格式化指定列的值，接收一个function，会传入两个参数，row和column，可以根据自己的需求进行处理
    </p>
  </div>

  <el-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending', name: 'descending' }"
    stye="width:100%"
  >
    <el-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
    ></el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      sortable
      width="180"
    ></el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      :formatter="formatter"
    ></el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import type { ElTableColumn } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}
const formatter = (row: User, column: any) => {
  console.log(column.label, 'column===')

  return row.address
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Aom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Bom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Com',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Dom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
<style scoped lang="scss"></style>
