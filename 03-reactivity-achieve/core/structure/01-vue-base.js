/* 
总结：写一个Vue原型
  1、setup比较早的一个生命周期钩子
  2、render，充当template模板，我们还没有写编译器,平常会把模板编译成render函数
*/
/* 
问题：写一个Vue原型
  1、更新全部，计算最小的更新点 ->vdo
  2、组件里没有写effectWatch,调用render，调用setUp其实是通用的，用户不需要知道
  
*/

// 引入 reactive effect 函数
import { reactive, effectWatch } from "../reactivity/05-reactivity_export.js";

const App = {
  // template -> render
  render(context) {
    // 构建 view = b
    // view -> 每次我都需要重新的创建
    // 要计算出最小的更新点 ->vdom
    // js-diff

    effectWatch(() => {
      document.body.innerText = "";
      // dom基础 js基础
      let ele = document.createElement("div");
      ele.innerText = context.state.count;
      document.body.append(ele);
    });
  },
  setUp() {
    // a = 响应式数据
    const state = reactive({ count: 1 });
    // 方便测试
    window.state = state;
    return { state };
  },
};

App.render(App.setUp());
