export interface IResponseType<P = Record<string, unknown>> {
  code: number
  msg: string
  data?: P
  total?: number
  rows?: P
  permissions?: P
  roles?: P
  roleIds?: P
  user?: P
  checkedKeys?: P
  menus?: P
  posts?: P
}
