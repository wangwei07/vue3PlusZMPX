##

    网址：
    内容： form表单封装注意事项
    日期：2023/8/1

# 1、哪些属性可以被配置

    eg :

    1、比如说 el-form
        label-width

    2、比如说 el-input
        placeholder

# 2、属性值数据类型是什么

     eg :

    1、比如说 el-form
        label-width string/number

    2、比如说 el-input
        placeholder string

# 3、错误配置

    1、假如设计 placeholder的type 类型为  undefined/string/number
    2、那么会发现自定义的类型和文档类型不一致，导致错误

      ```ts
        不能将类型“string | number | undefined”分配给类型“string | undefined”。
      ```
