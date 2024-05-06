# others 杂项


## getValidItem

在待选列表中获取可用项。

如果传递了当前值，则尝试获取当前值所对应的待选项，如果找不到，则返回第一个可用项。

::: tip 
适用场景：选项的自动选择功能。
:::

<Example>
  <others-getValidItem />
</Example>


**签名**

`getValidItem<T>(currentValue: any, items: T[], props: Props<T>): T`

**参数**

1. `currentValue` (any): 当前值
2. `items` (T[]): 待选列表
3. `props` (Props&lt;T&gt;): 值/可用字段配置

**返回值**

(T): 符合要求的可用项

**types**

```ts
type Prop<T, R = unknown> = (keyof T) | ((item: T) => R)

interface Props<T> {
  value: Prop<T>
  valid: Prop<T, boolean>
}
```

