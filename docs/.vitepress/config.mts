import { defineConfig } from 'vitepress'
import { autoGenerateSidebar, getFirstDocLink } from 'press-util'

export default defineConfig({
  base: '/',
  appearance: true,
  title: '工具库',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }], // chrome pwa
  ],
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/logo.svg',
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [{
      text: '🎯 快速入手',
      link: '/start.md'
    }, {
      text: '🛒 模块',
      link: getFirstDocLink('/api')
    }, /* {
      text: '🛡️ 测试用例',
      link: getFirstDocLink('/test')
    },  */{
      text: '⛵ 其他',
      link: getFirstDocLink('/others')
    }],
    sidebar: autoGenerateSidebar() as any,
  }
})
