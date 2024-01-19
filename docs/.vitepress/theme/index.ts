import Theme from 'vitepress/theme'
import ui from '@/plugins/element-ui'
import components from '@/components'
import '@/styles/index.css'
import 'virtual:svg-icons-register'
import Layout from '@/layout/index.vue'

// vite问题：引入外部文件时，外部文件如果继续依赖第三方库，会导致vite发生无法解析导入的错误
// import '@babel/runtime-corejs3/core-js/instance/slice'
// import '@babel/runtime-corejs3/core-js/array/from'
// import '@babel/runtime-corejs3/core-js/symbol'
// import '@babel/runtime-corejs3/core-js/get-iterator-method'
// import '@babel/runtime-corejs3/core-js/map'
// import '@babel/runtime-corejs3/helpers/slicedToArray'
// import '@babel/runtime-corejs3/helpers/toConsumableArray'
// import '@babel/runtime-corejs3/core-js/instance/slice'
// import '@babel/runtime-corejs3/core-js/object/entries'
// import '@babel/runtime-corejs3/core-js/instance/map'
// import '@babel/runtime-corejs3/core-js/instance/sort'
// import '@babel/runtime-corejs3/core-js/instance/concat'
// import '@babel/runtime-corejs3/core-js/instance/keys'
// import '@babel/runtime-corejs3/core-js/instance/splice'
// import '@babel/runtime-corejs3/core-js/url'
// import '@babel/runtime-corejs3/core-js/promise'
// import '@babel/runtime-corejs3/core-js/set'
// import '@babel/runtime-corejs3/core-js/map'

export default {
  ...Theme,
  Layout,
  enhanceApp(ctx) {
    const { app } = ctx;

    Theme.enhanceApp(ctx);
    app.use(ui)
    app.use(components)
  }
}
