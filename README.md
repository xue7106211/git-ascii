# Git ASCII

一个现代化的 Git 可视化工具，通过精美的 ASCII 艺术让您的代码历史变得生动有趣。

## ✨ 特性

- 🎨 **可视化历史** - 通过直观的图形化界面查看 Git 提交历史
- ⚡ **高性能** - 优化的渲染引擎确保流畅运行
- 🎯 **易于使用** - 简洁直观的界面设计
- 📱 **响应式设计** - 完美适配各种设备
- 🌙 **深色模式** - 支持自动和手动主题切换
- 🔧 **TypeScript** - 完整的类型安全支持

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 启动生产服务器

```bash
npm start
# 或
yarn start
```

## 📁 项目结构

```
src/
├── app/                 # App Router 目录
├── components/          # 可复用组件
│   ├── ui/             # UI 组件
│   ├── layout/         # 布局组件
│   └── features/       # 功能特定组件
├── lib/                # 工具函数和共享逻辑
├── hooks/              # 自定义 React hooks
├── types/              # TypeScript 类型定义
├── styles/             # 全局样式和 CSS 模块
└── utils/              # 辅助函数
```

## 🛠 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **工具**: ESLint, Prettier

## 📝 开发指南

### 代码风格

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 配置的代码规范
- 使用 Prettier 进行代码格式化
- 组件采用函数式编程风格

### 组件开发

- 每个组件一个文件
- 使用 TypeScript 接口定义 props
- 导出为命名导出
- 使用 `cn()` 工具函数合并 className

### 样式指南

- 优先使用 Tailwind CSS 类名
- 遵循移动优先的响应式设计
- 使用 CSS 变量实现主题切换
- 动画遵循性能最佳实践

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和开源社区。
