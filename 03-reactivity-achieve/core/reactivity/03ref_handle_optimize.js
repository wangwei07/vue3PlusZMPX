// 响应式库

let currentEffect = null;
class Dep {
  // 1、收集依赖
  constructor(val) {
    // 收集的依赖进行存储
    this.effects = new Set();
    this._val = val;
  }
  get value() {
    this.depend();
    return this._val;
  }
  set value(newVal) {
    this._val = newVal;
    this.notice();
  }
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  // 2、触发依赖
  notice() {
    this.effects.forEach((effect) => {
      effect();
    });
  }
}

const dep = new Dep(10);
function effectWatch(effect) {
  // 专门配合依赖去收集依赖
  currentEffect = effect;
  // 一上来就要执行
  effect();
  // 收集完依赖，把当前依赖清空
  currentEffect = null;
}

let b;
effectWatch(() => {
  b = dep.value + 10;
  console.log(b);
});

// proxy()
// 当a.value更新后，期待更新函数再次执行到
dep.value = 20;

// const dep = ref(10);
// dep.value = 20;

/* 
      1、优化
          1、比如说在effectWatch不调用  dep.depend();
          2、比如说不调用  dep.notice();
      
      2、在get里面触发一个收集依赖的动作
          dep.depend();
      
      3、在set里面触发依赖
         dep.notice();
*/
