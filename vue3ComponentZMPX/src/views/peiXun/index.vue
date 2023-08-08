<template>
  <div class="user">
    祝智盟早日上市
    <pageSearch
      :searchformConfig="searchformConfig"
      @handleQueryClick="handleQueryClick"
      @handleResetClick="handleResetClick"
    ></pageSearch>

    <Pagination
      style="position: static"
      :total="queryParams.total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    ></Pagination>
  </div>
</template>

<script setup lang="ts">
// 引入搜索组件
import pageSearch from '@/components/Form/index.vue'

// 引入搜索组件的配置文件：组件内容根据配置文件进行显示
import { searchformConfig } from './config'
// 搜索事件
const handleQueryClick = (value: any) => {
  // value 是搜索对象的关键字
  console.log(value, '搜索')
}

// 重置事件
const handleResetClick = () => {
  console.log('重置')
}

const getList = (val: any) => {
  console.log(val, '========')
}

const queryParams = ref({
  total: 20,
  pageNum: 1,
  pageSize: 10
})
</script>

<style scoped lang="less">
.user {
  width: 100%;
}
</style>
