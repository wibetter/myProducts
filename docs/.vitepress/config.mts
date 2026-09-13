import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// 部署地址：https://wibetter.github.io/myProducts/html
const base = '/'

export default defineConfig({
  base,
  outDir: '../html',
  assetsDir: './assets',
  title: 'wibetter',
  description:
    'wibetter 产品展示集，涵盖开源 JSON 编辑器、前端脚手架、BI 报表可视化编辑器、AI 智能问卷与商业化产品等',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '产品展示', link: '/产品展示' },
      {
        text: '开源项目',
        items: [
          { text: 'json-editor', link: '/products/json-editor' },
          { text: 'akfun', link: '/products/akfun' },
          { text: 'amis-reports', link: '/products/amis-reports' },
          { text: 'pigNews', link: '/products/pigNews' },
        ],
      },
      {
        text: '更多',
        items: [
          { text: 'npm 主页', link: 'https://www.npmjs.com/~wibetter' },
          { text: 'GitHub 主页', link: 'https://github.com/wibetter' },
        ],
      },
    ],
    sidebar: [
      {
        text: '作品列表',
        items: [
          { text: '开源 JSON 编辑器', link: '/products/json-editor' },
          { text: '前端脚手架 akfun', link: '/products/akfun' },
          { text: 'BI 报表可视化编辑器', link: '/products/amis-reports' },
          { text: 'AI 智能问卷', link: '/products/ai-survey' },
          { text: '小猪新闻（H5版）', link: '/products/pigNews' },
          { text: '自定义组件开发工具', link: '/products/neo-cmp-cli' },
          { text: '更多工具产品', link: '/products/more' },
        ],
      },
    ],
    outline: {
      label: '快速导航',
      level: [2, 3],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/wibetter' }],
  },
})
