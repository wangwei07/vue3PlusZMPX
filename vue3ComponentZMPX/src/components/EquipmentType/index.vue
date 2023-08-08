<template>
  <el-select
    v-model="data.upResId"
    clearable
    placeholder="请选择"
    @clear="handleClear"
    ref="selectEle"
  >
    <!-- 设置一个隐藏的下拉选项,动态更改value的值，最终赋值给el-select的v-model上 -->
    <el-option hidden :value="value" :label="data.upResName"> </el-option>

    <el-tree
      :data="data.data"
      :props="data.defaultProps"
      :expand-on-click-node="false"
      :check-on-click-node="true"
      @node-click="handleNodeClick"
    >
      <template v-slot="{ node }">
        <span class="custom-tree-node">
          <span>
            <svg-icon class="icon" icon-class="bug" color="red" />
            {{ node.label }}
          </span>
        </span>
      </template>
    </el-tree>
  </el-select>
</template>

<script lang="ts" setup>
const props = defineProps(['value'])
const emits = defineEmits(['update:value'])
const data = reactive({
  upResId: '',
  upResName: '',
  value: '',
  data: [
    {
      resId: 1,
      name: '一级 1',
      children: [
        {
          resId: 11,
          name: '二级 1-1',
          children: [
            {
              name: '三级 1-1-1'
            }
          ]
        }
      ]
    }
  ],
  defaultProps: {
    children: 'children',
    label: 'name'
  }
})
const selectEle = ref()
function handleNodeClick(res: any) {
  // 这里主要配置树形组件点击节点后，设置选择器的值；自己配置的数据，仅供参考
  data.upResName = res.name
  data.upResId = res.resId
  // 选择器执行完成后，使其失去焦点隐藏下拉框的效果
  selectEle.value.blur()
  // 更细父组件值
  emits('update:value', res.resId)
}

function handleClear() {
  // 将选择器的值置空
  data.upResName = ''
  data.upResId = ''
}

// 这里为了query.vue的重置逻辑
watch(
  () => props.value,
  (newVal) => {
    if (!newVal) {
      handleClear()
    }
  }
)
</script>
