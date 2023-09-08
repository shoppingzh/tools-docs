# array

## insert 插入元素

在数组的指定位置插入一个或N个元素，插入规则：**插入到指定索引前**。

<Example>
  <array-insert />
</Example>

**签名**

`insert<T>(arr: T[], index: number, objects: T[]): T[]`

`insert<T>(arr: T[], index: number, object: T): T[]`

**参数**

1. `arr` (T[]): 数组
2. `index` (number): 插入索引
3. `objects` (T | T[]): 插入的元素，可以是单个元素，也可以是元素列表

**返回值**

(T[]): 原数组


## remove 删除元素

删除数组指定索引的元素，支持索引列表批量删除。

<Example>
  <array-remove />
</Example>

**签名**

`remove<T>(arr: T[], index: number): T[]`

`remove<T>(arr: T[], indexes: number[]): T[]`

**参数**

1. `arr` (T[]): 数组
2. `indexOrIndexes` (number | number[]): 索引或索引数组

**返回值**

(T[]): 删除的元素数组


## move 移动元素

将数组中的某个元素移动到指定位置。

<Example>
  <array-move />
</Example>

**签名**

`move<T>(arr: T[], fromIndex: number, toIndex: number): T[]`

**参数**

1. `arr` (T[]): 数组
2. `fromIndex` (number): 开始移动的索引位置
3. `toIndex` (number): 移动到的索引位置

**返回值**

(T[]): 原数组


## toMap 转map

将一个 **对象数组** 转换为一个对象（常用于哈希表快速查找的场景）。

**签名**

`toMap<T extends object>(arr: T[], keyOrMapKey: (keyof T) | ((o: T) => ObjectKeyType)): Record<ObjectKeyType, T>`

**参数**

1. `arr` (T[]): 数组
2. `keyOrMapKey` (keyof T | ((o: T) => ObjectKeyType)): 对象key的字段，也可以是一个回调

**返回值**

(`Record<ObjectKeyType, T>`): 对象map

**Type**

```ts
export type ObjectKeyType = string | number | symbol
```
