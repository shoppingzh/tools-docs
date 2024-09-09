interface BaseNode {
  id?: number
  name?: string
}

export interface FlatNode extends BaseNode {
  pid?: number
}

export interface Node extends BaseNode {
  children?: Node[]
}

export const list = [
  {
    id: 1,
    name: '中国',
    pid: null,
  },
  {
    id: 2,
    name: '安徽省',
    pid: 1,
  },
  {
    id: 3,
    name: '福建省',
    pid: 1,
  },
  {
    id: 4,
    name: '合肥市',
    pid: 2,
  },
  {
    id: 5,
    name: '肥东县',
    pid: 4,
  },
  {
    id: 6,
    name: '肥西县',
    pid: 4,
  },
  {
    id: 7,
    name: '广东省',
    pid: 1,
  },
  {
    id: 8,
    name: '福州市',
    pid: 3,
  }
] as FlatNode

export const injectKey = Symbol()