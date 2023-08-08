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

export function effectWatch(effect) {
  // 专门配合依赖去收集依赖
  currentEffect = effect;
  // 一上来就要执行
  effect();
  // 收集完依赖，把当前依赖清空
  currentEffect = null;
}

// proxy
const targetMap = new Map(); // 存储所有dep
function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      //  console.log(key);
      // key  dep
      // dep存储在哪里
      const dep = getDep(target, key);
      // 依赖收集
      dep.depend();
      return Reflect.get(target, key); // 相当于 target[key]
    },
    set(target, key, value) {
      // 触发依赖，
      // 获取到dep
      const dep = getDep(target, key);
      // console.log(dep, "dep2");
      const result = Reflect.set(target, key, value);
      dep.notice();
      return result;
    },
  });
}

/*  

  1、把测试代码去除
  2、把 effectWatch  和 reactive导出
*/
