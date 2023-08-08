##

    网址：https://element-plus.gitee.io/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7
    内容：el-table
    日期：2023/4/11

# 1、table 属性

    属性名               说明
    data                显示的数据
    height              table的高度，默认为自动高度。如果height为number类型，单位px，如果height为string类型，则这个
                        高度会设置为table的style.height的值，table的高度会受控于外部样式
    max-height          table的最大高度，合法的值为数字或者单位为px的高度
    string              是否为斑马纹table
    border              是否带有纵向边框
    size                table的尺寸
    fit                 列的宽度是否自动撑开
    show-header         是否显示表头
    highlight-current-row   是否要高亮当前行
    current-row-key      当前行的key，只写属性
    row-class-name       行的className的回调方法，也可以使用字符串为所有行设置一个固定的ClassName
    row-style            行的style的回调方法，也可以使用一个固定的object未所有行设置一样的style
    cell-class-name      单元格ClassName的回调方法，也可以使用字符串为所有单元设置一个固定ClassName
    cell-style           单元格的style的回调方法，也可以使用一个固定的object为所有的第一个设置一样的style
    header-row-class-name   表头的ClassName的回调方法，也可以使用字符串为所有表头单元设置一个固定ClassName
    header-cell-style    表头单元格style的回调方法
    row-key
    empty-text            #empty
    default-expand-all      是否默认展开所有行，当table包含展开行或存在或者未树形表格时有效
    expand-row-keys       可以通过该属性设置table目前的展开行，需要设置row-key属性才能使用，该属性为展开行的keys数组
    default-sort            prop order
    tooltip-effect         effect
    show-summary           是否在表尾显示合计行
    sum-text                显示摘要航第一列文本
    summary-method          自定义的合计计算方法
    span-method             合并行或列的计算方法
    select-on-indeterminate 在多选表格中，当仅有部分行被选中时，点击标头的多选框时的行为，若为TRUE，则选中所有行，若为FALSE，则取消选择所有行
    indent                  展示树形数据时，树节点的缩进
    load                    lazy
    tree-props              渲染嵌套数据的配置选项
    table-layout            设置表格单元、行和列的布局方式
    scrollbar-always-on     总是显示滚动条

# 2、table 事件

    事件名                  说明
    select                  当用户手动勾选数据行的CheckBox时触发的事件
    select-all              当用户手动勾选全选CheckBox时触发的事件
    selection-change        当选择项发生变化时
    cell-mouse-enter        当单元格hover进入时
    cell-mouse-leave        当单元格hover退出时
    cell-click              当某个单元格被点击时
    cell-dblclick           当某个单元格被双击
    cell-contextmenu        当单元格鼠标右键
    row-dblclick            当某一行被双击时
    header-click            某一列的表头被点击时
    header-context-menu     当某一列的表头被鼠标右键
    sort -change            当表格的排序条件发生变化的时候
    filter-change           column的key，如果需要使用filter-change事件，则需要此属性标识那个column的筛选条件
    current-change          当表格的当前行发生变化的时候，如果要高亮当前行，请打开表格的highlight-current-row
    header-dragend          当拖动表头改变了列的宽度的时候会触发该事件
    expand-change           当用户对某一行展开或者关闭的时候会触发该事件

# 3、table 方法

    方法名                      描述
    clearSelection          用于多选表格，清空用户的选择
    getSelectionRows        返回当前选中的行
    toggleRowSelection      用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则可直接设置这一行选中与否
    toggleAllSelection      用多选表格，切换全选与全不选
    toggleRowExpansion      用于可扩展的表格或树表格，如果某行被扩展，则切换，使用第二个参数，您可以直接设置该行应该被扩展或折叠
    setCurrentRow           用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮的选中状态
    clearSort               用于清空排序条件，数据会恢复成未排序的状态
    clearFilter             传入由columnKey，组成的数组以清除指定列的过滤条件。如果没有参数，清除所有过滤器
    doLayout                对table进行重新布局，当表格可见性变化时，您肯恩更需要调用此方法以获得正确的布局
    sort                    手动个排序表格，参数prop属性指定排序列，order指定的排序顺序
    scrollTo                滚动到一组特定坐标
    setScrollTop            设置垂直滚动位置
    setScrollLeft           设置水平滚动位置

# 4、插槽

    插槽明
    -                        自定义默认内容
    append                   插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个slot，若表格有合计行，该slot会位于合计之上
    empty                    当数据为空时自定义的内容

# 5、table-column 属性

    type                    selection index expand
    index
    label                   显示的标题
    column-key              column的key，column的key，如果需要使用filter-change事件，则需要此属性标识是哪个column的筛选条件
    prop                    property
    width                   对应的列宽度
    min-width
    fixed                   true
    render-header           列标题label区域渲染使用的function
    sortable                对应的列是否可以排序，如果设置为custom，则代表用户希望远程排序，需要监听table的sort-change事件
    sort-method
    sort-by                 指定数据按照哪个属性进行排序，仅当sortable设置为TRUE，且没有设置sort-method的时候有效。如果sort-by为数组，则先按第1个属性排序，如果第1个相等，再按照第2个排序
    sort-orders
    resizable               对应列是否可以通过拖动改变宽度（需要在el-table上设置border属性为真）
    formatter               用来格式化内容
    show-overflow-tooltip   当内容过长被隐藏时显示tooltip
    align                   对齐方式
    header-align            表头的对齐方式，若不设置该项，则使用表格的对齐方式
    label-class-name        当前列标题的自定义类名
    selecttable             仅对type=selection的类有效，类型为function，function的返回值用来决定这一行的CheckBox是否可以勾选
    reserve-selection
    filters                 数据过滤的选项，数组格式，数组中的元素需要有text和value属性，数组中的每个元素都需要有text和value属性
    filter-placement        过滤弹出框的定位
    filter-multiple         数据过滤的选项是否多选
    filter-method           数据过滤使用的方法，如果是多选的筛选项，对每一条数据都会执行多次，任意一次返回TRUE就会显示
    filtered-value          选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性

# 6、table-column 插槽

    header                  自定义表头的内容，组员参数为{column,$index}
