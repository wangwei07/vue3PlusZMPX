<template>
  <div class="page-search">
    <hSearch v-bind="props.searchformConfig" v-model="formData">
      <template #footer>
        <div class="search-btn">
          <el-button type="default" @click="handleQueryClick">搜索</el-button>
          <el-button type="default" @click="handleResetClick" class="reset"
            >重置</el-button
          >
        </div>
      </template>
    </hSearch>
  </div>
</template>

<script setup lang="ts">
// import { ref, defineProps, defineExpose, defineEmits } from 'vue'
import hSearch from './form.vue'

const emits = defineEmits(['handleQueryClick', 'handleResetClick'])
// 基础配置
const props = defineProps({
  searchformConfig: {
    type: Object,
    required: true
  }
})
// 获取数据：
const formItems = props.searchformConfig.formItems ?? []
// 对数据进行初始化
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
// 把初始化的数据进行赋值
const formData = ref(formOriginData)

// 重置按钮方法
const handleResetClick = () => {
  // 根据form 组件的双向绑定 进行重置数据
  // eslint-disable-next-line guard-for-in
  for (const key in formOriginData) {
    // 办法一
    formData.value[`${key}`] = formOriginData[key]
    // 办法二
    // formData.value = formOriginData;
  }
  emits('handleResetClick')
}
// 搜索按钮事件
const handleQueryClick = () => {
  emits('handleQueryClick', formData.value)
}

// 暴露方法
defineExpose({
  handleQueryClick,
  handleResetClick
})
</script>

<style scoped lang="less">
.search-btn {
  text-align: right;
  padding: 5px;
}
</style>
