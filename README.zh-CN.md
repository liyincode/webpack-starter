# Webpack React TypeScript 起步模板

[English](./README.md) | 简体中文

一个现代化的前端开发起步模板，包含 Webpack 5、React 19、TypeScript、ESLint 和 TailwindCSS。

## 特性

- ⚡️ **Webpack 5** - 现代构建系统
- ⚛️ **React 19** - 最新的 React 版本，提供更优性能
- 📝 **TypeScript** - 类型安全和增强的开发体验
- 🎨 **TailwindCSS 4** - 实用优先的 CSS 框架
- 🧹 **ESLint** - 代码质量和一致性
- 💅 **Prettier** - 代码格式化
- 🔥 **热模块替换** - 快速的开发体验
- 📦 **代码分割** - 优化的生产构建
- 🖼️ **资源管理** - 优化的图片和字体处理

## 安装

### GitHub 模板

[使用这个模板创建仓库](https://github.com/liyincode/webpack-starter/generate)

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit liyincode/webpack-starter my-app
cd my-app
npm i 
```

## 脚本命令

- `npm start` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run lint` - 运行 ESLint

## 开发

```bash
npm start
```

这将启动支持热模块替换的开发服务器，地址为 http://localhost:8080。

## 生产构建

```bash
npm run build
```

生产文件将生成在 `dist` 目录中。

## 项目结构

```
webpack-starter/
├── config/                # Webpack 配置文件
│   ├── webpack.common.js  # 通用 webpack 配置
│   ├── webpack.dev.js     # 开发环境特定配置
│   └── webpack.prod.js    # 生产环境特定配置
├── public/                # 静态资源
│   ├── index.dev.html     # 开发环境 HTML 模板
│   ├── index.prod.html    # 生产环境 HTML 模板
│   └── favicon.ico        # 网站图标
├── src/                   # 源文件
│   ├── components/        # React 组件
│   ├── assets/            # 静态资源如图片、字体和图标
│   ├── styles/            # CSS 和 TailwindCSS 样式
│   ├── main.tsx           # 入口文件
│   └── ...                # 其他源文件
├── eslint.config.mjs      # ESLint 配置
├── package.json           # 项目依赖和脚本
├── postcss.config.js      # PostCSS 配置
├── tailwind.config.js     # TailwindCSS 配置
└── tsconfig.json          # TypeScript 配置
```

## Webpack 配置

webpack 配置分为三个文件：

- `webpack.common.js` - 包含开发和生产环境共享的通用配置
- `webpack.dev.js` - 开发环境特定设置（源映射、开发服务器）
- `webpack.prod.js` - 生产环境优化（代码压缩、代码分割）

### 修改 webpack 配置

你可以通过编辑 `config` 目录中的文件来修改 webpack 配置。

## 许可证

MIT
