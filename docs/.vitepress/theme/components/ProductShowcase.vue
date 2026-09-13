<script setup lang="ts">
import { withBase } from 'vitepress'

interface ProductAction {
  label: string
  url: string
}

interface ProductItem {
  title: string
  name: string
  desc: string
  tags: string[]
  link: string
  actions: ProductAction[]
}

const products: ProductItem[] = [
  {
    title: '开源 JSON 编辑器',
    name: 'json-editor',
    desc: '提供 JSON 与 JSON Schema 的可视化编辑能力，内置 JSONEditor、SchemaEditor，可通过表单化界面维护 schema 和 json 数据，可用于支持组件与页面的配置可视化。',
    tags: ['开源', 'JSON', 'Schema'],
    link: '/products/json-editor',
    actions: [
      { label: '访问地址', url: 'https://wibetter.github.io/json-editor/online-demo/7.0.0/index.html' },
      { label: '源码地址', url: 'https://github.com/wibetter/json-editor' },
    ],
  },
  {
    title: '前端脚手架',
    name: 'akfun',
    desc: '前端通用脚手架：基于 Webpack 与 Rollup 的多场景前端打包工具，零配置、开箱即用。',
    tags: ['开源', '脚手架', 'Webpack', 'Rollup'],
    link: '/products/akfun',
    actions: [
      { label: '访问地址', url: 'https://akfun-docs.netlify.app/' },
      { label: '源码地址', url: 'https://github.com/wibetter/akfun' },
    ],
  },
  {
    title: 'BI 报表可视化编辑器',
    name: 'amis-reports',
    desc: '爱速搭报表是基于 ECharts 实现的图表功能组件，旨在为用户提供简单和快捷的可视化报表能力，帮助用户在爱速搭平台上快速设计常见的数据报表页和大屏报表效果页。',
    tags: ['报表', 'ECharts', '可视化'],
    link: '/products/amis-reports',
    actions: [
      { label: '访问地址', url: 'https://wibetter.github.io/amis-editor-demo/reports-demo/index.html#/edit/0' },
      { label: 'NPM 地址', url: 'https://www.npmjs.com/package/amis-reports' },
    ],
  },
  {
    title: 'AI 智能问卷',
    name: 'ai-survey',
    desc: 'AI 智能问卷系统结合大语言模型与语音识别技术，将问卷创建、分发、收集和分析全流程压缩到极致，让企业、教育工作者和调研人员专注于洞察，而非工具。',
    tags: ['AI', '大模型', '语音识别'],
    link: '/products/ai-survey',
    actions: [
      { label: '访问地址', url: 'https://wibetter.site/' },
    ],
  },
  {
    title: '自定义组件开发工具',
    name: 'neo-cmp-cli',
    desc: '企业级商业化产品，含 CLI、事件动作机制、平台实体数据源、模块共享、组件运行时上下文等使用说明。',
    tags: ['企业级', 'CLI', '组件'],
    link: '/products/neo-cmp-cli',
    actions: [
      { label: '在线使用手册', url: 'https://neo-cmp-docs.netlify.app/' },
    ],
  },
  {
    title: '小猪新闻（H5版）',
    name: 'pigNews',
    desc: '滚动资讯、高清图集、视频集锦的 H5 新闻应用。',
    tags: ['H5', '新闻', '移动端'],
    link: '/products/pigNews',
    actions: [
      { label: '访问地址', url: 'https://wibetter.github.io/pigNews' },
      { label: '源码地址', url: 'https://github.com/wibetter/pigNews' },
    ],
  },
]
</script>

<template>
  <div class="product-showcase">
    <div class="product-grid">
      <a
        v-for="item in products"
        :key="item.name"
        class="product-card"
        :href="withBase(item.link)"
      >
        <div class="product-card__header">
          <h3 class="product-card__title">{{ item.title }}</h3>
          <span class="product-card__name">{{ item.name }}</span>
        </div>
        <p class="product-card__desc">{{ item.desc }}</p>
        <div class="product-card__tags">
          <span
            v-for="tag in item.tags"
            :key="tag"
            class="product-card__tag"
          >{{ tag }}</span>
        </div>
        <div class="product-card__actions">
          <a
            v-for="action in item.actions"
            :key="action.label"
            class="product-card__action"
            :href="action.url"
            target="_blank"
            rel="noreferrer"
            @click.stop
          >{{ action.label }}</a>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.product-showcase {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px 22px 22px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

html.dark .product-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

.product-card__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.product-card__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--vp-c-text-1);
}

.product-card__name {
  flex-shrink: 0;
  font-size: 12px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-3);
}

.product-card__desc {
  margin: 0;
  flex: 1 1 auto;
  font-size: 14px;
  line-height: 1.65;
  color: var(--vp-c-text-2);
}

.product-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.product-card__tag {
  padding: 3px 10px;
  font-size: 12px;
  line-height: 1.4;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 999px;
}

.product-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.product-card__action {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.product-card__action:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
