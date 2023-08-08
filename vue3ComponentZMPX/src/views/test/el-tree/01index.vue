<template>
  <!-- 基础用法 -->
  <el-tree
    :data="data"
    props="defaultProps"
    @node-click="handleNodeClick"
  ></el-tree>
</template>

<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'level one 1',
    children: [
      { label: 'level two 1-1', children: [{ label: 'level three 1-1-1' }] }
    ]
  },
  {
    label: 'level one 2',
    children: [
      { label: 'level two 2-1', children: [{ label: 'level; three 2-1-1' }] },
      { label: 'level two 2-2', children: [{ label: 'level three 2-2-1' }] }
    ]
  },
  {
    label: 'level one 3',
    children: [
      { label: 'level two 3-1', children: [{ label: 'level three 3-1-1' }] },
      { label: 'level two 3-2', children: [{ label: 'level three 3-2-1' }] }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}
</script>
