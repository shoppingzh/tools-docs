# tree

::: tip
开始tree的api学习之前，推荐你先阅读这篇文章：[树的奇妙之旅](../others/树的奇妙之旅.md)。
:::

## parseFromList 集合转树

<!-- <Example>
  <tree-parseFromList />
</Example> -->

**签名**

```ts
parseFromList<Source extends BaseNode, CK extends ChildrenKeyType = DefaultChildrenKeyType, Target extends MixNodes<Source, CK> = MixNodes<Source, CK>>(
  list: Source[],
  props?: Props<Source, CK>,
): Target[]
```

**参数**

1. `list` (Source[]): 数组
2. `props` (`Props<S, R>`): 属性映射

**返回值**

(Target[]): 树节点列表

**types**

```ts
export type BaseNode = Record<string, any>
/** 子节点列表字段类型 */
export type ChildrenKeyType = string | symbol
/** 默认子节点列表字段 */
export type DefaultChildrenKeyType = 'children'
/** 将原数据结构与指定的children属性合并成一个新的树结构 */
export type MixNodes<E extends BaseNode, ChildrenKey extends ChildrenKeyType> = E & { [key in ChildrenKey]: MixNodes<E, ChildrenKey>[] }

interface Props<E extends BaseNode = BaseNode, CK extends ChildrenKeyType = ChildrenKeyType> {
  id?: PropValueGetter<E>
  pid?: PropValueGetter<E>
  children?: CK
}
```

## traverse 遍历

**签名**

```ts
traverse<T extends BaseNode>(
  nodes: T[],
  callback: TraverseCallback<T>,
  strategy: TraverseStrategy = 'dfs-pre',
  childrenProp: keyof T = DEFAULT_CHILDREN_PROP as keyof T,
): void
```

**参数**

1. `nodes` (T[]): 节点列表
2. `callback` (TraverseCallback\<T\>): 回调函数
3. `strategy` (TraverseStrategy): 遍历策略
4. `childrenProp` (keyof T): 子节点属性名

**返回值**

无

**types**

```ts
/** 遍历回调 */
export type TraverseCallback<T> = (node: T, parent: T, depth: number) => boolean | void
/** 遍历策略 dfs-pre 深度优先遍历-前序遍历 dfs-post 深度优先遍历-后序遍历 bfs 广度优先遍历 */
export type TraverseStrategy = 'dfs-pre' | 'dfs-post' | 'bfs'
export type BaseNode = Record<string, any>
/** 子节点列表字段类型 */
export type ChildrenKeyType = string | symbol
/** 默认子节点列表字段 */
export type DefaultChildrenKeyType = 'children'
```

## find 查找节点

**签名**

```ts
find<E extends BaseNode>(
  nodes: E[],
  predicate: NodePredicate<E>,
  traverseStrategy: TraverseStrategy = 'dfs-pre',
  childrenProp: keyof E = DEFAULT_CHILDREN_PROP as keyof E
): E | undefined
```

**参数**
1. `nodes` (E[]): 节点列表
2. `predicate` (NodePredicate\<E\>): 推断回调
3. `traverseStrategy` (TraverseStrategy): 遍历策略
4. `childrenProp` (keyof E): 子节点属性名

**返回值**

(E | undefined): 找到的节点

**types**

```ts
/** 节点推断函数 */
export type NodePredicate<T> = (node: T, parent: T, depth: number) => boolean
/** 遍历策略 dfs-pre 深度优先遍历-前序遍历 dfs-post 深度优先遍历-后序遍历 bfs 广度优先遍历 */
export type TraverseStrategy = 'dfs-pre' | 'dfs-post' | 'bfs'
export type BaseNode = Record<string, any>
/** 子节点列表字段类型 */
export type ChildrenKeyType = string | symbol
/** 默认子节点列表字段 */
export type DefaultChildrenKeyType = 'children'
```

## findFirstLeaf 查找第一个叶子节点

**签名**

```ts
findFirstLeaf<E extends BaseNode>(
  nodes: E[],
  childrenProp: keyof E = DEFAULT_CHILDREN_PROP as keyof E
)
```

**参数**
1. `nodes` (E[]): 节点列表
2. `childrenProp` (keyof E): 子节点属性名

**返回值**
(E | undefined): 找到的节点

## flat 打平为数组

**签名**

```ts
flat<E>(
  nodes: E[],
  traverseStrategy: TraverseStrategy = 'dfs-pre',
  childrenProp: keyof E = DEFAULT_CHILDREN_PROP as keyof E
)
```

**参数**
1. `nodes` (E[]): 节点列表
2. `traverseStrategy` (TraverseStrategy): 遍历策略
3. `childrenProp` (keyof E): 子节点属性名

**返回值**

(E[]): 打平后的数组

**types**

```ts
/** 遍历策略 dfs-pre 深度优先遍历-前序遍历 dfs-post 深度优先遍历-后序遍历 bfs 广度优先遍历 */
export type TraverseStrategy = 'dfs-pre' | 'dfs-post' | 'bfs'
```

## flatToMap 打平为对象

**签名**

```ts
flatToMap<E>(
  nodes: E[],
  prop: PropValueGetter<E>,
  traverseStrategy: TraverseStrategy = 'dfs-pre',
  childrenProp: keyof E = DEFAULT_CHILDREN_PROP as keyof E
): Record<string, E>
```

**参数**

1. `nodes` (E[]): 节点列表
2. `prop` (PropValueGetter\<E\>): 选择哪个属性作为键
3. `traverseStrategy` (TraverseStrategy): 遍历策略
4. `childrenProp` (keyof E): 子节点属性名

**返回值**

(Record\<string, \E>): 打平后的对象

**types**

```ts
/** 对象属性获取：键名 | 回调 */
export type PropValueGetter<Item, PropValue = any> = (keyof Item) | ((item: Item) => PropValue)
/** 遍历策略 dfs-pre 深度优先遍历-前序遍历 dfs-post 深度优先遍历-后序遍历 bfs 广度优先遍历 */
export type TraverseStrategy = 'dfs-pre' | 'dfs-post' | 'bfs'
```

## prune 剪枝

**签名**

```ts
prune<E extends BaseNode>(
  nodes: E[],
  predicate: NodePredicate<E>,
  childrenProp: keyof E = DEFAULT_CHILDREN_PROP as keyof E,
)
```

**参数**
1. `nodes` (E[]): 节点列表
2. `predicate` (NodePredicate\<E\>): 推断回调
3. `childrenProp` (keyof E): 子节点属性名

**返回值**

(E[]): 剪枝后的节点列表

**types**

```ts
export type BaseNode = Record<string, any>
/** 节点推断函数 */
export type NodePredicate<T> = (node: T, parent: T, depth: number) => boolean
```