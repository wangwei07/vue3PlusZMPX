/* 
  总结 ： 
    1、组件里没有写effectWatch,调用render，调用setUp其实是通用的，用户不需要知道
    2、此文件就是要干这些事,不需要用户自己在什么时候调用render，调用setup了，
*/
import { effectWatch } from "./reactivity/05-reactivity_export.js";
import { mountElement } from "./renderer/index.js";
export function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      // 组件进来，我们可以拿到它的一个值
      const context = rootComponent.setUp();
      effectWatch(() => {
        rootContainer.innerHTML = "";
        // 这里不再是一个element了
        //  const element = rootComponent.render(context);
        const subTree = rootComponent.render(context);
        // console.log(subTree, "subTree=======");
        // 挂载虚拟节点
        mountElement(subTree, rootContainer);
      });
    },
  };
}
