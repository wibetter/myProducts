import type { Theme } from 'vitepress'
// 官方默认主题（含 Layout、增强能力等），作为扩展基础
import DefaultTheme from 'vitepress/theme'
// 全局注册的自定义组件：产品展示卡片
import ProductShowcase from './components/ProductShowcase.vue'

/**
 * 自定义主题入口
 * 通过 `extends` 继承默认主题，仅注册自定义组件；
 * 其余行为与 VitePress 默认主题一致。
 * 官方文档：https://vitepress.dev/zh/guide/custom-theme
 */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProductShowcase', ProductShowcase)
  },
} satisfies Theme
