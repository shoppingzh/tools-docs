# datetime

## getBetweenDates

`getBetweenDates(from: Date, to: Date, type: Type): Date[]`

- `from` / `to`
  - undefined/null -> 报错
  - 非Date类型 -> 报错
  - Date类型，但为非法时间 -> 返回空列表
  - `from` > `to` -> 返回反向列表
  - `from` = `to` -> 返回一个Date
- `type`
  - undefined/null -> 报错
  - 非枚举值 -> 报错
  - 每个type分别测试，特点：
    - 包含from和to

## getOffsetDates

`getOffsetDates(date: Date, offset: number, unitType: UnitType): Date[]`

- `date`
- `offset`
- `unitType`

