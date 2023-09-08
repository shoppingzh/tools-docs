# 快速入手

## 安装

```bash
pnpm i @shoppingzh/tools # pnpm
yarn add @shoppingzh/tools # yarn
npm i @shoppingzh/tools # npm

```

## 使用

```ts
import { createWatermark } from '@shoppingzh/tools/lib/dom'

createWatermark(el, 'hello, world!')
```

## 模块

- [dom](./api/dom)
- [number](./api/number.md)
- [array](./api/array.md)
- [tree](./api/tree.md)
- [path](./api/path.md)

## Q&A

**为什么各个模块分别打包，而不是打包到一个文件？**

TODO
