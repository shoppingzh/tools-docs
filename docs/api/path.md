# path

## join

连接路径。

<Example>
  <path-join />
</Example>

**签名**

`join(...paths: string[]): string`

**参数**

1. `paths` (string[]): 路径列表

**返回值**

(string): 拼接后的字符串

::: danger 注意
该算法不特殊处理以协议开头的路径，如 `join('https://', 'google.com')` 会被处理为 `https:/google.com`。

该算法默认一切皆路径，其抽象程度是比URL还要大的。
:::

## createQuerystring

从对象创建查询字符串。

<Example>
  <path-createQuerystring />
</Example>

**签名**

`createQuerystring<T extends object>(object: T, options?: Options<T>): string`


**参数**

1. `object` (object): 对象
2. `options` (Options): 配置项

```ts
interface Options<T> {
  encode?: boolean
}
```

**返回值**

(string): 查询字符串

**转换规则**

- `undefined`： 跳过
- `null`：格式化为空字符串
- 基本数据类型：转成字符串
- 数组：展开每个项，每个项转成字符串（注：只处理数组第一层，不处理更深层级）
- 对象：调用对象 `toString` 转成字符串