<template>
  <el-tree
    :data="data"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps"
  ></el-tree>
</template>

<script lang="ts" setup>
const defaultProps = {
  children: 'children',
  label: 'label'
}

const data = [
  {
    id: 1,
    label: 'level one 1',
    children: [
      {
        id: 4,
        label: 'level two 1-1',
        children: [
          {
            id: 9,
            label: 'level three 1-1-1'
          },
          {
            id: 10,
            label: 'level three 1-1-2'
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
        label: 'level two 2-1'
      },
      {
        id: 6,
        label: 'level two 2-2'
      }
    ]
  },
  {
    id: 3,
    label: 'level one 3',
    children: [
      {
        id: 7,
        label: 'level two 3-1'
      },
      {
        id: 8,
        label: 'level two 3-2'
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
