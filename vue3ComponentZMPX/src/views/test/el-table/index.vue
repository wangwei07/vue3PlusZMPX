<template>
  <div>
    <p>支持树类型的数据显示</p>
    <p>当row中包含children字段时，被视为树形数据</p>
    <p>渲染嵌套的数据需要prop的row-key</p>
    <p>此外，子行数据可以异步加载。设置table的lazy属性为TRUE与加载函数load</p>
    <p>通过指定row中的hasChildren字段来指定哪些行时包含子节点</p>
    <p>children与hasChildren都可以通过tree-props配置</p>
  </div>

  <el-table
    :data="tableData1"
    style="width: 100%"
    row-key="id"
    lazy
    :load="load"
    tree-props="{children:'children',hasChildren:'hasChildren'}"
  >
    <el-table-column prop="date" label="Date"></el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column prop="address" label="Address"></el-table-column>
  </el-table>
</template>

<script setup lang="ts">
/*
把带有children的那个row加上el-table_row--level-0，在cell里加个图标
然后把自己的孩子节点指定为el-table_row--level-1,放在level-0下面，隐藏，cell加上一个el-table__indent,设置padding-left:16px;显示缩进

*/
interface User {
  id: number
  date: string
  name: string
  address: string
  hasChildren?: boolean
  children?: User[]
}

const tableData1: User[] = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    hasChildren: true,
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const load = (
  row: User,
  treeNode: unknown,
  resolve: (date: User[]) => void
) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No.1'
      },
      {
        id: 32,
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: 'No.2'
      }
    ])
  }, 1000)
}
</script>
<style scoped lang="scss"></style>
