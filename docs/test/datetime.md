# datetime

## getBetweenDates

`getBetweenDates(from: Date, to: Date, unitType: UnitType): Date[]`

- `from` / `to`
  - undefined/null -> 报错
  - 非Date类型 -> 报错
  - `from` > `to` -> 返回反向列表
  - `from` = `to` -> 返回一个Date
- `unitType`
  - undefined/null -> 报错
  - 非枚举值 -> 报错
  - year/quater/month/day/hour/minute/second/millisecond

## getOffsetDates

`getOffsetDates(date: Date, offset: number, unitType: UnitType): Date[]`

- `date`
- `offset`
- `unitType`

