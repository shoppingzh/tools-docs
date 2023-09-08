# path

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