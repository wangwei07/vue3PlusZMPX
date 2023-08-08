import { createApp } from 'vue'
import CodeDiff from 'v-code-diff'
import Cookies from 'js-cookie'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import './rem' // 中文语言
// import 'lib-flexible'
import '@/assets/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'
import directive from './directive' // directive

// 注册指令
import plugins from './plugins' // plugins
import { download } from '@/utils/request'

import tooltip from '@/directives/tooltip.js'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
import elementIcons from '@/components/SvgIcon/svgicon'

import { useDict } from '@/utils/dict'
import {
  parseTime,
  resetForm,
  addDateRange,
  handleTree,
  selectDictLabel,
  selectDictLabels
} from '@/utils/ruoyi'

// 分页组件
import Pagination from '@/components/Pagination'
// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar/index.vue'
// 文件上传组件
import FileUpload from '@/components/FileUpload/index.vue'
// 图片上传组件
import ImageUpload from '@/components/ImageUpload/index.vue'
// 图片预览组件
import ImagePreview from '@/components/ImagePreview/index.vue'
// 自定义树选择组件
import TreeSelect from '@/components/TreeSelect/index.vue'
// 字典标签组件
import DictTag from '@/components/DictTag/index.vue'
// 暂无数据组件
import NoData from '@/components/NoData/index.vue'
// dl组件
import ZmDl from '@/components/zmDl/index.vue'

// card组件
import HomeCard from '@/components/Card/HomeCard/index.vue'
import QueryCard from '@/components/Card/QueryCard/index.vue'
import TableCard from '@/components/Card/TableCard/index.vue'
import EquipmentType from '@/components/EquipmentType/index.vue'
import Full from '@/components/Full/index.vue'
import ZmTable from '@/components/ZmTable/index.vue'

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.useDict = useDict
app.config.globalProperties.download = download
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.selectDictLabels = selectDictLabels

// 全局组件挂载
app.component('DictTag', DictTag)
app.component('Pagination', Pagination)
app.component('TreeSelect', TreeSelect)
app.component('FileUpload', FileUpload)
app.component('ImageUpload', ImageUpload)
app.component('ImagePreview', ImagePreview)
app.component('RightToolbar', RightToolbar)
app.component('HomeCard', HomeCard)
app.component('QueryCard', QueryCard)
app.component('TableCard', TableCard)
app.component('EquipmentType', EquipmentType)
app.component('Full', Full)
app.component('ZmTable', ZmTable)
app.component('NoData', NoData)
app.component('ZmDl', ZmDl)

app.use(router)
app.use(store)
app.use(plugins)
app.use(elementIcons)
app.component('svg-icon', SvgIcon)

directive(app)

app.directive('t', tooltip)
// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale,
  // 支持 large、default、small
  size: Cookies.get('size') || 'default'
})
app.use(CodeDiff)
app.mount('#app')
