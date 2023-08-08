// 创建一个虚拟节点 vdom vnode
// 一个元素的组成部分   标签  tag  标签属性 props  标签内容 children
export function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  };
}
