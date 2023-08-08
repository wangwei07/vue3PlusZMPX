##

    网址：https://element-plus.gitee.io/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7
    内容：el-upload
    日期：2023/4/19

# 1、属性

    名称            描述
    action          请求URL
    headers         设置上传的请求头部
    method          设置上传的请求方式
    multiple        是否支持多文件上传
    data            上传时附带的额外参数
    name            上传的文件字段名
    with-credentials  支持发送cookie凭证信息
    show-file-list  是否显示已上传文件列表
    drag            是否启用拖拽功能
    accept          接收上传的文件类型
    on-preview      点击文件列表中已上传的文件时的钩子
    on-remove       文件列表移除文件时的钩子
    on-success      文件上传成功时的钩子
    on-error        文件上传失败时的钩子
    on-progress     文件上传时的钩子
    on-change       文件粘贴改变时的钩子，添加文件，上传成功和上传失败都会调用
    on-exceed       当超出限制时，执行的钩子
    before-upload   上传文件之前的钩子，参数为上传的文件，若返回FALSE，或者返回promise，且被reject，则停止上传
    before-remove   删除文件之前的钩子，参数为上传的文件和文件列表，若返回FALSE，或者返回promise，且被reject，则停止删除
    file-list/v-model:file-list 默认上传文件
    list-type       文件类型，text picture picture-card
    auto-upload     是否自动上传文件
    http-request    覆盖默认的xhr行为，允许自行实现上传文件的请求
    disabled        是否禁用上传
    limit           允许上传文件最大数量

# 2、插槽

    名称            描述
    default         自定义默认内容
    trigger         触发文件选择框的内容
    tip             提示说明文字
    file            缩略图模本的内容

# 3、外部方法

    名称            描述
    abort           取消上传请求
    submit          手动上传文件列表
    clearFiles      清空已上传的文件列表
    handleStart     手动选择文件
    handleRemove    手动移除文件。

# 4、实现图片上传原理

    1、运用 input type='file' 的标签获取图片，再使用FileReader这个对象new一个实例，通过这个对象的readAsDataURL()方法读取file标签获取的图片并转换成base64格式
    2、完成之后通过Ajax之类的方式传到后台

# 5、HTML

    1、需要一个input type=’file‘ 的标签，如果需要预览的话可以再加一个img标签

    ```html
      <div class='wrap'>
          <div class='wrap-content'>点击上传</div>
          <input type='file' id='file'/>

      </div>
      <img  src=''/>
    ```

# 6、js

    1、图片上传需要检测上传的图片是否变换，所以这里选择js的onchange事件
    2、先获取input ，img 的DOM元素，
    3、在input type='file'的demo元素下，有一个files属性
    4、里面是我们上传的文件信息，打印一下，就可以看到上传文件的名字，类型信息

    ```js
      var file = document.getElementById('file')
      var image = document.getElementById('img')
      file.onchange=function(){
        var fileData = this.files[0];//这是我们上传的文件
      }
    ```

    5、然后运用FileReader这个对象，FileReader主要用于将文件内容读入内存，通过一系列异步接口
    6、可以在主线程中访问本地文件
    7、使用FileReader对象，web应用程序可以异步的读取存储在用户计算机的文件（或者原始数据缓冲）内容
    8、可以使用File对象或者blob对选来指定所要处理的文件或数据。这里用到了里面的readAsDataURL这个¬
    9、他能把文件用base64格式读出
    10、使用方法

        ```js
          var reader = new FileReader()
          reader.readAsDataURL(fileData);//异步读取文件内容，结果用data:url的字符串形式表示
          // 当读取操作成功完成时调用
          reader.onload = function(e){
            console.log(e);//查看对象属性里面有个result属性，属性值是一大串base64格式的东西，这个是我们要的图片
            console.log(this.result);//获取的数据，这里的this指向FileReader()对象的实例reader
            image.setAttribute('src',this.result)
          }
        ```

# 7、FileReader 对象的属性和事件

      方法定义                        描述
      abort()                         终止文件读取
      readAsArrayBuffer(file)         异步按字节读取文件内容，结果用ArrayBuffer对象表示
      readAsBinaryString(file)        异步按字节读取文件内容，结果为文件的二进制串
      readAsDataURL(file)             异步读取文件内容，结果用data:url的字符串形式表示
      readAsText(file,encoding)       异步按字符读取文件内容，结果用字符串形式表示

      事件名称                         描述
      onabort                         当读取操作被中止时调用
      onerror                         当读取操作发生错误时调用
      onload                          当读取操作成功完成时调用
      onloadend                       当读取操作完成时调用，不管是成功还是失败
      onloadstart                     当读取操作开始之前调用
      onprogress                      在读取数据过程中调用

# 8、

    1、用户在使用时，我们不能保证用户上传的是什么东西
    2、图片还是视频，需要判断一下文件类型
    3、input type=file  的demo元素下，有一个files属性，它里面有文件类型的信息
    4、我们可以通过这属性来判断上传文件类型
    5、reader.onload里面通过this.result可以获得图片的base64格式
    6、把它赋值给一个变量传到后台，这样就完成了一个图片上传

    ```js
      var file = document.getElementById('file')
      var image = document.getElementById('img')
      file.onchange=function(){
          var fileData = this.files[0];//这是我们上传的文件
          var pattern = /^image/;
          console.info(fileData.type)
          if(!pattern.test(fileData.type)){
            alert('图片格式不正确')
            return
          }
          var reader = new FileReader();
          reader.readAsDataURL(fileData)//异步读取文件内容，结果用data:url的字符串形式
          /* 当读取操作成功完成时调用 */
          reader.onload=function(e){
            console.log(e)
            console.log(this.result)//查看数据
            image.setAttribute('src',this.result)
          }
      }
    ```
