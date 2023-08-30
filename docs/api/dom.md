# dom

## createWatermark 创建水印

在指定的元素上创建水印。


<Example>
  <dom-createWatermark />
</Example>

**参数**


```ts
interface WatermarkCoreOptions {
  // 文字
  fontFamily?: string
  textColor?: string
  textSize?: number
  fontBold?: boolean
  fontItalic?: boolean
  rotate?: number
  // 背景
  bgColor?: string
  // 其他
  padding?: [number, number]
}

export interface CreateWatermarkOptions extends WatermarkCoreOptions {
  zIndex?: number
}
```

**返回值**

无



追加水印的元素分为两种类型：

**普通元素**

<dom-createWatermark2 />


**canvas**

<dom-createWatermark3 />