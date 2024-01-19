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

将所有模块打包在一起，在使用时会比较方便，这是大多数库的方案。

但是，本工具库定位是业务工具库，在已有的众多优秀的第三方库上层进行开发，如 `datetime` 模块依赖了 `dayjs` ，`echarts` 模块依赖了 `echarts` 。

如果打包在一个文件中，就需要用户安装所有依赖包，这会使项目的打包产物变得臃肿，因此，按照依赖的库的不同进行模块拆分，既可以避免用户接触不必要了解的模块，还能有效降低打包产物的大小。

