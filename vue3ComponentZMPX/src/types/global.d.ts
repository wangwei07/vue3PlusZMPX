/// <reference types="vite/client" />

import type { VNodeChild, PropType as VuePropType } from 'vue'

declare  IResponseType<P = Record<string, unknown>> {
  code: number
  msg: string
  data?: P
  total?: number
  rows?: P
  permissions?: P
  roles?: P
  user?: P
}


decl
