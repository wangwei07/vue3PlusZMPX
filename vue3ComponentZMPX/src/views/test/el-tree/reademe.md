##

    网址：https://element-plus.gitee.io/zh-CN/component/tree.html#%E5%B1%9E%E6%80%A7
    内容：el-tree
    日期：2023/4/10

# 1、属性

    属性名           说明
    data            展示数据
    empty-text      内容为空的时候展示的文本
    node-key        每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
    props           配置项，具体看下表
    render-after-expand 是否在第一次展开某个树节点后才渲染其子节点
    load            加载子树数据的方法，仅当lazy属性为TRUE时生效
    render-content  树节点的内容区的渲染function
    highLight-current 是否高亮当前选中节点，默认值为FALSE
    default-expand-all  是否默认展开所有节点
    expand-on-click-node 是否在点击节点的时候选中节点，默认值为FALSE，即只有在点击复选框时才会选中节点
    auto-expand-parent    展开子节点的时候是否自动展开父节点
    default-expand-keys   默认展开的节点的key数组
    show-checkbox         节点是否可选择
    check-strictly   在显示复选框的情况下，是否严格遵循父子不互相关联的做法，默认为FALSE
    default-checked-keys  默认勾选的节点的key的数组
    current-node-key  当前选中的节点
    filter-node-method  对树节点进行筛选时执行的方法，返回FALSE，则表示这个节点会被隐藏
    accordion       是否每次只打开一个统计树节点
    indent          相邻级节点间的水平缩进，单位为像素
    icon            自定义树节点图标组件
    lazy            是否懒加载子节点，需要与load方法结合使用
    draggable       是否开启拖拽节点功能
    allow-drop      拖拽时判定目标节点能否成为拖动目标位置，如果返回FALSE，拖动节点不能被拖放到目标节点，type参数有三种情况 prev,inner 和 next，分别表示放置在目标节点前
    、插入至目标节点后，和放置在目标节点后

# 2、props

     props            说明
     label            指定节点标签为节点对象的某个属性值
     children         指定子树节点对象的某个属性值
     disabled         指定节点选择框是否禁用为节点对象的某个属性值
     isLeaf           指定节点是否为叶子节点，仅在指定了lazy属性的情况下生效

# 3、方法

    filter            顾虑所有树节点，过滤后的节点将被隐藏
    updateKeyChildren 为节点设置新数据，只有当设置node-key属性时才可用
    getCheckedNodes   如果节点可以被选中，show-checkbox为TRUE，本方法将返回当前被选中节点的数组
    setCheckedNodes   设置目前勾选的节点，使用此方法必须提前设置node-key属性
    getCheckedKeys    若节点可用被选中，它将返回当前选中，那个节点key的数组
    setCheckedKeys    设置目前勾选的节点，使用此方法必须提前设置node-key
    setChecked        设置节点是否被选中，使用此方法必须设置node-key
    getHalfCheckedNodes 如果节点可被选中，则返回目前半选中的节点的key所组成的数组
    getCurrentKey     返回当前被选中节点的数据，如果没有则返回null
    getCurrentNode    返回当前被选中节点的数据
    setCurrentKey     通过key设置某个节点的当前选中状态，使用此方法必须设置node-key
    setCurrentNode    设置节点为选中状态，使用此方法必须设置node-key属性
    getNode           根据data或者key拿到tree组件中的node
    remove            删除tree中的一个节点，使用此方法必须设置node-key
    append            为tree中的一个节点追加一个节点
    insertBefore      在tree中给定节点前插入一个节点
    insertAfter       在tree中给定节点后插入一个节点

# 4、事件

    node-click        当节点被点击的时候触发
    node-contextmenu  当某一节点被鼠标右键点击时会触发该事件’
    check-change      当复选框被点击的时候触发
    check             点击节点复选框之后触发
    current-change    当前选中节点变化时触发的事件
    node-expand       节点被展开时触发的事件
    node-collapse     节点被关闭时触发的事件
    node-drag-start   节点开始拖拽时触发的事件
    node-drag-enter   拖拽进入其他节点时触发的事件
    node-drag-leave   拖拽离开某个节点时触发的事件
    node-drag-over    在拖拽节点时触发的事件
    node-drag-end     拖拽结束时触发的事件
    node-drop         拖拽成功完成时触发的事件
