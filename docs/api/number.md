# number 数字/数值

## format 格式化

格式化数值，支持同时格式化千分位与小数位，且性能优良。

<Example>
  <number-format />
</Example>

**签名**

`format(value: number, thousandth?: boolean, fraction?: number): string`

**参数**

1. `value` (number): 数值
2. `thousandth` (boolean): 是否格式化千分位
3. `fraction` (number): 小数位数

**返回值**

(string): 格式化后的数值

<!-- :::details 性能问题
::: -->