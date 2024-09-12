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
  // {
  //   id: 7,
  //   name: '广东省',
  //   pid: 1,
  // },
  {
    id: 8,
    name: '福州市',
    pid: 3,
  },
  {
    id: 9,
    name: '鼓楼区',
    pid: 8,
  },
  {
    id: 10,
    name: '安庆市',
    pid: 2,
  },
  {
    id: 11,
    name: '迎江区',
    pid: 10,
  },
  {
    id: 12,
    name: '望江县',
    pid: 10,
  },
  {
    id: 13,
    name: '大观区',
    pid: 10,
  },
  {
    id: 14,
    name: '太湖县',
    pid: 10,
  },
  {
    id: 15,
    name: '晋安区',
    pid: 8,
  },
  {
    id: 16,
    name: '仓山区',
    pid: 8,
  },
  {
    id: 17,
    name: '泉州市',
    pid: 3,
  },
] as FlatNode
