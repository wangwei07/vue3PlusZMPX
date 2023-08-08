import type { IForm } from '@/types/peiXun'

export const searchformConfig: IForm = {
  formItems: [
    {
      // field：双向绑定的关键字
      field: 'id',
      // form表单类型
      type: 'input',
      // label
      label: 'id',
      // 搜索框文字提醒
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'date',
      type: 'date',
      label: '日期',
      placeholder: '请选择日期'
    },
    {
      field: 'daterange',
      type: 'daterange',
      label: '日期范围',
      placeholder: '请选择日期范围'
    },
    {
      field: 'sport',
      type: 'select',
      label: '运动',
      placeholder: '请选择运动',
      options: [
        { label: '足球', value: '33' },
        { label: '篮球', value: '22' },
        { label: '排球', value: '11' }
      ]
    },
    {
      field: 'cascader',
      type: 'cascader',
      label: '运动',
      placeholder: '请选择运动',
      options: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency'
                },
                {
                  value: 'controllability',
                  label: 'Controllability'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation'
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  labelWidth: '100px'
}
