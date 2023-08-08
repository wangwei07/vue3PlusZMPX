<template>
  <div class="search">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- form 组成部分 
      form域  
      表单控件 类型处理
      
      提示信息
    -->

    <el-form :label-width="props.labelWidth" :inline="true">
      <template v-for="item in props.formItems" :key="item.label">
        <el-form-item :label="item.label">
          <template v-if="item.type === 'input' || item.type === 'password'">
            <el-input
              :show-password="item.type == 'password'"
              :placeholder="item.placeholder"
              v-model="formData[`${item.field}`]"
            ></el-input>
          </template>
          <template v-else-if="item.type === 'select'">
            <el-select
              :placeholder="item.placeholder"
              v-model="formData[`${item.field}`]"
            >
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              />
            </el-select>
          </template>
          <template v-else-if="item.type === 'cascader'">
            <el-cascader
              v-model="formData[`${item.field}`]"
              :options="item.options"
              :show-all-levels="false"
              :placeholder="item.placeholder"
            />
          </template>
          <template v-else-if="item.type === 'date'">
            <el-date-picker
              v-model="formData[`${item.field}`]"
              type="date"
              range-separator="至"
              :placeholder="item.placeholder"
              end-placeholder="End date"
            />
          </template>
          <template v-else-if="item.type === 'daterange'">
            <el-date-picker
              v-model="formData[`${item.field}`]"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              :placeholder="item.placeholder"
              end-placeholder="结束时间"
            />
          </template>
        </el-form-item>
      </template>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { IFormItem } from '@/types/peiXun'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  // 双向绑定
  modelValue: {
    type: Object,
    required: true
  },
  // 组件数据
  formItems: {
    type: Array as () => IFormItem[],
    default: () => []
  },
  //  label宽度
  labelWidth: {
    type: String,
    default: '80px'
  },
  // 用于响应式
  colLayout: {
    type: Object,
    default: () => ({
      xl: 4,
      lg: 6,
      md: 8,
      xs: 24
    })
  }
})

// 这里选择里办法一进行实现
// 办法1：获取值：{ ...props.modelValue} 进行浅拷贝，避免破坏props单向数据流,
// v-model="formData[`${item.field}`]"
const formData = ref({ ...props.modelValue })

// 办法2：使用computed，需要把组件中的v-model 改成 :model-value="modleValue[`${item.field}`]"  和 @update:modelValue='handleValueChange($event,item.field)'

// 同时需要把 值更新：结构props.modelValue，[field]:value则实现值替换
const handleValueChange = (value: any, field: any) => {
  emits('update:modelValue', { ...props.modelValue, [field]: value })
}
// const formData = computed(() => ({ ...props.modelValue }));
// 进行深度监听,实现组件双向绑定
watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
</script>

<style scoped lang="less">
// 铺满
.el-select,
/deep/.el-cascader {
  width: 100%;
}
.header {
  text-align: center;
}
.footer {
  float: right;
  padding-right: 20px;
}
</style>
