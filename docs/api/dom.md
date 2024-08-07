# dom

## createWatermark 创建水印

在指定的元素上创建水印。


<Example>
  <dom-createWatermark />
</Example>

**签名**

`createWatermark(el: HTMLElement | HTMLCanvasElement, text: string, options: CreateWatermarkOptions)`

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

**签名**

`download(url: string, filename?: string, newWindow?: boolean): void`

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

## downloadSilent 静默下载

静默同步下载（使用iframe）。

<Example>
  <dom-downloadSilent />
</Example>

**签名**

`downloadSilent(url: string): void`

**参数**

1. `url` (string): 文件URL

**返回值**

(void)

::: danger 注意
静默下载解决了使用 `a` 标签导致当前页刷新或新开页面的情况，但也同时带来一个副作用：

因为静默下载，因此也会引起静默失败，当下载失败时，用户得不到任何错误消息。
:::


## downloadBlob 下载Blob

下载Blob。

<Example>
  <dom-downloadBlob />
</Example>

**签名**

`downloadBlob(blob: Blob, filename?: string): void`

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

## loadImage 加载图片

加载图片，适用于动态插入图片元素或在canvas上动态绘制图片的场景。

<Example>
  <dom-loadImage />
</Example>

**签名**

`loadImage(url: string): Promise<HTMLImageElement>`

**参数**

1. `url` (string): 图片地址

**返回值**

(Image): 图片元素对象

## setTitle 设置标题

设置浏览器窗口标题。

<Example>
  <dom-setTitle />
</Example>

**签名**

`setTitle(title: string)`

**参数**

1. `title` (string): 标题

**返回值**

(void)

## copyText 复制文本

复制文本到剪切板。

<Example>
  <dom-copyText />
</Example>

**签名**

`copyText(text: string): Promise<void>`

**参数**

1. `text` (string): 文本内容

**返回值**

`Promise<void>`



## getCopiedText 获取复制的文本

从剪切板获取复制的文本。

<Example>
  <dom-getCopiedText />
</Example>

**签名**

`getCopiedText(): Promise<string>`


**参数**

无

**返回值**

(`Promise<string>`): 文本内容