// ddaterange' | 'date' 日期选择器;
// 表单中的组件类型
type IFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'cascader'
  | 'daterange'
  | 'date'

// 表单所需要的数据类型
// field：双向绑定关键字
// type：表单中组件的类型（通过type进行匹配：比如：input 是一个输入框，password则是密码框）
// label  标签名称
// rules 验证规则
// placeholder 提醒文字
// options  数据（比如select ）
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string | undefined
  options?: any[]
}

// 表单的配置
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
