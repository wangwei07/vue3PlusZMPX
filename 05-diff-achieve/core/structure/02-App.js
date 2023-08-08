/* 
问题：写一个Vue原型
  1、更新全部，计算最小的更新点 ->vdo
  2、组件里没有写effectWatch,调用render，调用setUp其实是通用的，用户不需要知道
  
*/

// 引入 reactive effect 函数
import { reactive } from "../reactivity/05-reactivity_export.js";
import { h } from "../h.js";

export default {
  render(context) {
    return h(
      "div",
      { id: "app - id" + context.state.count, class: "showTime" },
      //  String(context.state.count)
      [h("p", null, String(context.state.count)), h("p", null, "haha")]
    );
  },
  setUp() {
    const state = reactive({ count: 1 });
    window.state = state;
    return { state };
  },
};
