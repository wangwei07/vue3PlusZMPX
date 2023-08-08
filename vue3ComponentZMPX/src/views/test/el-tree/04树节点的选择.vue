<template>
  <h4>
    树及诶按的选择，本例展示如何获取和设置，各有两种方式，通过node或通过key，如果需要通过key来获取或设置，则必须设置node-key
  </h4>
  <el-tree
    ref="treeRef"
    :data="data"
    show-checkbox
    default-expand-all
    node-key="id"
    highlight-current
    :props="defaultProps"
  ></el-tree>

  <div class="buttons">
    <el-button @click="getCheckedNodes">get by node</el-button>
    <el-button @click="getCheckedKeys">get by key</el-button>
    <el-button @click="setCheckedNodes">set by node</el-button>
    <el-button @click="setCheckedKeys">set by key</el-button>
    <el-button @click="resetChecked">reset</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTree } from 'element-plus'
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
  id: number
  label: string
  children?: Tree[]
}

const treeRef = ref<InstanceType<typeof ElTree>>()
const getCheckedNodes = () => {
  console.log(treeRef.value!.getCheckedNodes(false, false))
}

const getCheckedKeys = () => {
  console.log(treeRef.value?.getCheckedKeys(false))
}
const setCheckedNodes = () => {
  treeRef.value!.setCheckedNodes(
    [
      {
        id: 5,
        label: 'level two 2-1'
      },
      {
        id: 9,
        label: 'level three 1-1-1'
      }
    ] as Node[],
    false
  )
}

const setCheckedKeys = () => {
  treeRef.value!.setCheckedKeys([3], false)
}

const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false)
}

const defaultProps = {
  children: 'children',
  label: 'label'
}

const data: Tree[] = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1'
          },
          {
            id: 10,
            label: 'Level three 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1'
      },
      {
        id: 6,
        label: 'Level two 2-2'
      }
    ]
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1'
      },
      {
        id: 8,
        label: 'Level two 3-2'
      }
    ]
  }
]
</script>
<style lang="scss">
.el-tree {
  background-color: yellow;
}
.el-tree:hover {
  background-color: yellow;
}
#app .el-checkbox__input.is-checked .el-checkbox__inner::after {
  background-color: red !important;
}
</style>
