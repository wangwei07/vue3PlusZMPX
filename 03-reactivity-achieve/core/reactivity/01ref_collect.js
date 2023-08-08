// 响应式库

let currentEffect = null;
// es6 +
// es5 构造函数 vue2
class Dep {
  // 1、收集依赖
  constructor() {
    // 收集的依赖进行存储
    this.effects = new Set();
  }
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  // 2、触发依赖
  // todo
}

const dep = new Dep();
function effectWatch(effect) {
  // 专门配合依赖去收集依赖
  currentEffect = effect;
  // 一上来就要执行
  effect();
  dep.depend();
  // 收集完依赖，把当前依赖清空
  currentEffect = null;
}

effectWatch(() => {
  console.log("嘿嘿");
});

console.log(dep.effects);
/* 

  总结：
     第一步：
     1、响应式核心就是 收集依赖（把东西依赖进来），触发依赖 ,，所以第一步建一个依赖这么一个类
     2、看用户使用的方式，在effect里面收集依赖，依赖其实就是这个回调函数，应该被a给收集进去，这个关系就是要明白，而且是通过effect去触发
     3、定义effectWatch函数去收集依赖
     4、收集的依赖进行存储
     5、类如何与函数建立关系，函数中的effect如何与类中的effect建立关系，建立一个全局变量
     6、初始化一个dep实例，调用实例的depend方法，清空依赖
     7、完成收集依赖,可以发现依赖是一个set集合，每一项确实是一个函数
        ```js
          effectWatch(() => {
            console.log("嘿嘿");
          });

          console.log(dep.effects);
        ```
*/
