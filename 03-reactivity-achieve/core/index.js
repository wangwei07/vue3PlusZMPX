/* 
  总结 ： 
    1、组件里没有写effectWatch,调用render，调用setUp其实是通用的，用户不需要知道
    2、此文件就是要干这些事,不需要用户自己在什么时候调用render，调用setup了，
*/
import { effectWatch } from "./reactivity/05-reactivity_export.js";

export function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      // 组件进来，我们可以拿到它的一个值
      const context = rootComponent.setUp();
      effectWatch(() => {
        const element = rootComponent.render(context);
        rootContainer.innerHTML = "";
        rootContainer.append(element);
      });
    },
  };
}
