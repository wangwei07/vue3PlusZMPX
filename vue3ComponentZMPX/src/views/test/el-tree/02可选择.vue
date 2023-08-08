<template>
  <!-- 可选择 -->
  <H3
    >可选择，适用于下药噢选择层级时使用，本例还展示了动态加载节点数据的方法</H3
  >

  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
    @check-change="handleCheckChange"
  ></el-tree>
</template>

<script lang="ts" setup>
import type Node from 'element-plus/es/components/tree/src/model/node'

let count = 1

interface Tree {
  name: string
}

const props = {
  label: 'name',
  children: 'zones'
}

const handleCheckChange = (
  data: Tree,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate)
}

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'Root1' }, { name: 'Root2' }])
  }
  if (node.level > 3) {
    //  return resolve([])
  }
  let hasChild = false

  if (node.data.name === 'region1') {
    alert(1)
    hasChild = true
  } else if (node.data.name === 'region2') {
    alert(2)
    hasChild = false
  } else {
    hasChild = Math.random() > -1
  }
  setTimeout(() => {
    let data: Tree[] = []
    if (hasChild) {
      data = [{ name: `zone${count++}` }, { name: `zone${count++}` }]
    } else {
      data = []
    }
    resolve(data)
  }, 500)
}
</script>
