import { Ref } from "vue"

export const injectKey = Symbol()

export interface Inject<Context = unknown> {
  context: Context
  next: (context: any) => Promise<void>
  tipsEl: Ref<HTMLElement>
  menuEl: Ref<HTMLElement>
  call: (fn: (...args: any[]) => any, ...args: any[]) => Promise<any>
}