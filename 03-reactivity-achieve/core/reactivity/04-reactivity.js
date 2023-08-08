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

function effectWatch(effect) {
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

  // { obj : map ()}

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}
function reactive(raw) {
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
      console.log(dep, "dep2");
      const result = Reflect.set(target, key, value);
      dep.notice();
      return result;
    },
  });
}

const user = reactive({
  age: 19,
  name: "ww",
  child: {
    sex: "男",
  },
});

let double;
effectWatch(() => {
  double = user.age + user.name;
  console.log(double, "=========================");
});

setTimeout(() => {
  user.age = 20;
  user.name = "ss";
}, 2000);

/* 
      1、每个dep对应着一个单值
           dep ->number string
      2、每一个reactive对应着一个对象
           reactive -> object array
           就是每一个对应着一个dep，修改key的时候，让对应的dep去管理一个依赖
      3、这个对象什么时候改变的
          object.a  -> get
          object.a=2 -> set
      4、vue2中使用的是defineProperties
          一个一个属性去设置，嵌套执行，消耗性能非常大
      
      5、vue3出现了代理对象

      6、在get中使用Proxy的好基友 Reflect

      7、一个key对应一个dep
        对象有一个对应的key，而这个key必须有一个对应的dep,而这些dep存储在哪里

      8、targetMap  
        1、给我们一个存储所有的dep的集合
*/
