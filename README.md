# Webpack React TypeScript Starter

English | [简体中文](./README.zh-CN.md)

A modern frontend development starter template with Webpack 5, React 19, TypeScript, ESLint, and TailwindCSS.

## Features

- ⚡️ **Webpack 5** - Modern build system
- ⚛️ **React 19** - Latest React version with improved performance
- 📝 **TypeScript** - Type safety and enhanced developer experience
- 🎨 **TailwindCSS 4** - Utility-first CSS framework
- 🧹 **ESLint 9** - Code quality and consistency
- 💅 **Prettier** - Code formatting
- 🔥 **Hot Module Replacement** - Fast development experience
- 📦 **Code Splitting** - Optimized production build
- 🖼️ **Asset Management** - Optimized handling of images and fonts

## Installation

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/liyincode/webpack-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit liyincode/webpack-starter my-app
cd my-app
npm i
```

## Scripts

- `npm start` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Development

```bash
npm start
```

This will start the development server at http://localhost:8080 with hot module replacement enabled.

## Production Build

```bash
npm run build
```

Production files will be generated in the `dist` directory.

## Project Structure

```
webpack-starter/
├── config/                # Webpack configuration files
│   ├── webpack.common.js  # Common webpack config
│   ├── webpack.dev.js     # Development-specific config
│   └── webpack.prod.js    # Production-specific config
├── public/                # Static assets
│   ├── index.dev.html     # HTML template for development
│   ├── index.prod.html    # HTML template for production
│   └── favicon.ico        # Favicon
├── src/                   # Source files
│   ├── components/        # React components
│   ├── assets/            # Static assets like images, fonts, and icons
│   ├── styles/            # CSS and TailwindCSS styles
│   ├── main.tsx           # Entry point
│   └── ...                # Other source files
├── eslint.config.mjs      # ESLint configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # TailwindCSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Webpack Configuration

The webpack configuration is split into three files:

- `webpack.common.js` - Contains common configuration shared between development and production
- `webpack.dev.js` - Development-specific settings (source maps, dev server)
- `webpack.prod.js` - Production optimizations (minification, code splitting)

### Modifying webpack configuration

You can modify the webpack configuration by editing the files in the `config` directory.

## License

MIT
