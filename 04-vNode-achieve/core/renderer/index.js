export function mountElement(vNode, container) {
  const { tag, props, children } = vNode;
  // tag
  const el = document.createElement(tag); //  <div id='app'> string </div>

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
  //  document.body.appendChild(el)
}
