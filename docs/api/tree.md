# tree

## parseFromList 集合转树

**签名**

`parseFromList<S extends object, R extends S & Node>(list: S[], props?: Props<S, R>): R[]`

**参数**

1. `list` (S[]): 数组
2. `props` (`Props<S, R>`): 属性映射

**返回值**

(R[]): 树节点列表

**types**

```ts
type KeyOrMapKey<T> = (keyof T) | ((o: T) => unknown)

interface Props<S, R> {
  id?: KeyOrMapKey<S>
  pid?: KeyOrMapKey<S>
  children?: string
}

interface Node {
  children?: Node[]
}
```