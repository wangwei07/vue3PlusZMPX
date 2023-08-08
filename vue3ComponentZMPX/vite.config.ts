import { defineConfig, loadEnv } from 'vite'
import px2rem from 'postcss-pxtorem'
import path from 'path'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import createVitePlugins from './vite/plugins'

const loder_pxtovw = postcsspxtoviewport({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 1920, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  exclude: [],
  landscape: false // 是否处理横屏情况
})
// 引入等比适配插件
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
  propList: ['*']
})

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env

  return {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: 9528,
      host: true,
      open: true,
      proxy: {
        '/dev-api/bs': {
          target: 'http://192.168.100.229:8801',
          changeOrigin: true, // 是否改变域名
          rewrite: (p) => p.replace(/^\/dev-api\/bs/, 'bs')
        },
        '/dev-api': {
          //   target: 'http://192.168.1.147:8080', // 帅哥地址
          target: 'http://127.0.0.1:8080', // 帅哥地址
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      }
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          },
          loder_pxtovw
          //  postcss
        ]
      },
      preprocessorOptions: {
        scss: {
          // additionalData: '@import"@/assets/css/globalstyle.scss";'
          // 👆这样写是不行的。因为如果项目中其他的css文件有@forward关键字，就会提示错误
          additionalData: '@use "@/assets/styles/globalVar.scss" as *;'
          // 👆这样写是可以的，但是要注意
          // !!!!一定要将其他地方引入该css文件的地方删除，如index.html,否则会提示已经加载该module的错误！！！
        }
      }
    }
  }
})
