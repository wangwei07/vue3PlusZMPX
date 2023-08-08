// n1 oldVnode
// n2 newVnode
export function diff(n1, n2) {
  console.log(n1, n2);
  // 1、tag
  if (n1.tag !== n2.tag) {
    n1.el.replaceWith(document.createElement(n2.tag));
  } else {
    // 将n1.el 交给 n2.el
    const el = (n2.el = n1.el);
    // 2 props

    const { props: newProps } = n2;
    const { props: oldProps } = n1;
    if (newProps && oldProps) {
      // 新老节点属性不一致 (包括新节点属性多余老节点属性，和新老节点属性不一致 )
      Object.keys(newProps).forEach((key) => {
        const newVal = newProps[key];
        const oldVal = oldProps[key];
        if (newVal !== oldVal) {
          el.setAttribute(key, newVal);
        }
      });
    }
    // 新节点没有某个属性
    if (oldProps) {
      Object.keys(oldProps).forEach((key) => {
        if (!newProps[key]) {
          el.removeAttribute(key);
        }
      });
    }

    // 3、children -> (暴力解决)
    // 1、newChildren -> string (oldChildren -> string oldChildren -> array)
    // 2、newChildren -> array  (oldChildren -> string oldChildren -> array)
    const { children: newChildren } = n2;
    const { children: oldChildren } = n1;
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        n2.innerText = newChildren;
      } else if (Array.isArray(oldChildren)) {
        n2.innerText = newChildren;
      }
    } else if (Array.isArray(newChildren)) {
      if (typeof oldChildren === "string") {
        el.innerText = "";
        mountElement(n2, el);
      } else if (Array.isArray(oldChildren)) {
        // 处理公共的vnode
        const length = Math.min(newChildren.length, oldChildren.length);
        for (let index = 0; index < length; index++) {
          const newVnode = newChildren[index];
          const oldVnode = oldChildren[index];
          diff(oldVnode, newVnode);
        }
        // 创建节点
        if (newVnode.length > length) {
          for (let index = length; index < newVnode.length; index++) {
            const newVnode = newChildren[index];
            mountElement(newVnode);
          }
        }
        // 删除节点
        if (oldChildren.length > length) {
          for (let index = length; index < oldChildren.length; index++) {
            const oldVnode = oldChildren[index];
            oldVnode.el.parent.removeChild(oldVnode.el);
          }
        }
      }
    }
  }
}
export function mountElement(vNode, container) {
  const { tag, props, children } = vNode;
  // tag
  const el = (vNode.el = document.createElement(tag));

  // props
  if (props) {
    for (const key in props) {
      const val = props[key];
      el.setAttribute(key, val);
    }
  }

  // children
  if (children) {
    if (typeof children === "string") {
      const textNode = document.createTextNode(children);
      el.append(textNode);
    }
    // 数组，需要递归
    else if (Array.isArray(children)) {
      children.forEach((v) => {
        mountElement(v, el);
      });
    }
  }

  // 插入
  container.append(el);
}
