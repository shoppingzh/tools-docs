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
  - 对象
    - Object
    - Date
    - RegExp
    - 其他
- `encode`
  - true/false
  - undefined/null/number/string/symbol/function/...

