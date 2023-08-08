<template>
  <el-table
    ref="Table"
    :data="data"
    :border="option.border"
    :height="option.height"
    :max-height="option.maxHeight"
    :stripe="option.stripe"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.1)"
    element-loading-text="数据正在加载中..."
    :row-key="option.rowKey"
    :tree-props="option.treeProps"
    @cell-mouse-leave="outTip(true)"
    @cell-mouse-enter="outTip(false)"
  >
    <el-table-column
      v-for="(col, ind) in header"
      :key="ind"
      :prop="col.prop"
      :label="col.label"
      :align="col.align || 'center'"
      :width="col.width"
      :minWidth="col.minWidth"
      show-overflow-tooltip
      :formatter="col.formatter"
      :render-header="col.renderHeader"
    >
      <!--   <template v-slot="scope" v-if="col.useTemplate == true">
        <div v-html="col.useTemplateRes(scope.row)"></div>
      </template> -->

      <template #default="scope" v-if="col.useTemplate == true">
        <component
          :is="col.useTemplateRes(scope.row)"
          :row="scope.row"
        ></component>
      </template>
    </el-table-column>

    <slot></slot>
    <template v-slot:empty>
      <!-- 加一个空的span标签防止暂无数据出现 -->
      <span></span>
      <NoData v-if="!loading" />
    </template>
  </el-table>
</template>
<script lang="ts" setup>
const { proxy } = getCurrentInstance() as any
const props = defineProps(['data', 'option', 'loading', 'header'])

// 鼠标离开单元格隐藏 tool-tip
function outTip(val: boolean) {
  if (val) {
    const ele = document.querySelector('.el-popper.is-dark') as HTMLElement
    if (ele) {
      ele.style.display = 'none'
    }
  }
}

// 滚动时隐藏 tool-tip
onMounted(() => {
  const ele = document.querySelector('.el-scrollbar__wrap')
  if (!ele) return
  ele.addEventListener(
    'scroll',
    () => {
      const ele2 = document.querySelector('.el-popper.is-dark') as HTMLElement
      if (!ele2) return
      ele2.style.display = 'none'
    },
    true
  )
})

// table表格滚动到顶部
function toTop() {
  const ele = document.querySelector('.el-scrollbar__wrap') as HTMLElement
  if (ele) {
    setTimeout(() => {
      ele.scrollTop = 0
    }, 200)
  }
}

// 监听数据变化，滚动条置顶
watch(
  () => props.data,
  (val) => {
    if (val) {
      toTop()
    }
  },
  { deep: true, immediate: true }
)
</script>
