# path

## createQuerystring

`createQuerystring<T extends object>(object: T, encode?: boolean): string`

- `object`：
  - undefined
  - null
  - 不为对象
- `object` key：
  - string/number/symbol
- `object` value：
  - undefined/null
  - string/number/boolean/symbol/bigint
  - 数组
  - Set/Map
  - 其他
    - Object
    - Date
    - RegExp
- `encode`
  - true/false
  - undefined/null/number/string/symbol/function/...

## parseFilename

`parseFilename(filename: string): ParseResult`

- `filename`：
  - undefined/null
  - 不为string
  - 空字符串
  - 没有后缀，如 `README`
  - 文件名以 `.` 开头，如 `.gitignore`
  - 文件名以 `.` 结尾（事实是操作系统不允许创建此类文件名），如 `README.`
  - 文件名很多 `.` ，如 `xpzheng.README.md`