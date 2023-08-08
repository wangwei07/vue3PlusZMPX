(function () {
  class Animal {
    constructor(val) {
      this._val = val;
    }

    get value() {
      return this._val;
    }

    set value(newVal) {
      console.log(newVal);
      this._val = newVal;
    }
  }

  let a1 = new Animal(1);
  a1.value = 10;
})();

(() => {
  // map
  const m = new Map();
  m.set("a", "123");
  m.set("b", "123");
  console.dir(m, "m==");

  const m2 = new Map([
    ["name", "张三"],
    ["age", 18],
  ]); //Map数据类型
  console.log(m2.get("name")); //获取Map数据类型并在控制台打印
  m2.get["测试"]; //也可以这样写：

  console.log(m2, "m2===");
})();

(() => {
  const obj = { a: 1, b: 2 };
  const m = new Map();
  m.set(obj, new Map());
  console.log(m, "mm==");
})();
(() => {
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

  let target;
  const user = {
    name: 1,
    sex: "男",
  };
  target = user;
  const targetMap = new Map();

  // 第一次进来是没有的，给depsMap进行初始化，然后再给它set回去
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get("aa");
  if (!dep) {
    dep = new Dep();
    depsMap.set("aa", dep);
  }

  console.log(targetMap);
})();
