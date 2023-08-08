import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// 自动按需导入组件和注册组件

import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [
    vue({
      reactivityTransform: true
    })
  ]
  vitePlugins.push(createAutoImport())

  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcon(isBuild))
  // 无须在组价中引入api
  vitePlugins.push(
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          axios: [['default', 'axios']]
        }
      ]
    })
  )

  if (isBuild) {
    vitePlugins.push(...createCompression(viteEnv))
  }

  return vitePlugins
}
