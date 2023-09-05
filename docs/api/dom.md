# dom

## createWatermark 创建水印

在指定的元素上创建水印。


<Example>
  <dom-createWatermark />
</Example>

**参数**

1. `el` (HTMLElement | HTMLCanvasElement): DOM元素
2. `text` (string): 文字内容
3. `options` (CreateWatermarkOptions): 选项

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

export type CreateWatermarkOptions = WatermarkCoreOptions
```

**返回值**

(void)

### 更多

追加水印的元素分为两种类型：

**普通元素**

<dom-createWatermark2 />


**canvas**

<dom-createWatermark3 />

## download 下载文件

通过构造 `a` 标签来下载文件。


<Example>
  <dom-download />
</Example>

**参数**

1. `url` (stirng): 下载链接
2. `filename` (string): 下载文件名
3. `newWindow` (boolean): 是否在新窗口打开

**返回值**

(void)



::: danger 注意
要知道，基于 `a` 标签下载的方案并不好。 `a` 标签的点击会造成 **同步请求**，因此，如果下载的链接返回错误，将导致当前页面被替换，这种体验是不好的。

尽管可以通过设置 `a` 标签的 `target` 属性为 `_blank` ，但这又会打开一个新的窗口，并且如果发生错误，页面仍然会替换，对于需要静默下载的场景，这种做法仍然不能解决问题。
:::

## downloadBlob 下载Blob

下载Blob。

<Example>
  <dom-downloadBlob />
</Example>

**参数**

1. `blob` (Blob): Blob对象
2. `filename` (string): 文件名

**返回值**

(void)

### 经典场景复现：异步下载

异步下载大致分为以下步骤：

1. 使用异步请求获取到一个Blob对象
2. 将这个Blob对象下载到本地

<Example>
  <dom-downloadBlob2 />
</Example>

::: tip 优势
异步下载最大的优势就是下载过程可控，诸如加loading这种基于同步下载做不到的事都可以做到了。
:::

::: danger 劣势
异步下载最大的问题就是跨域。
:::