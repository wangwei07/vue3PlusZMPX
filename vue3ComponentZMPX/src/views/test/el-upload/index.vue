<template>
  <div class="fileBox">
    <div class="warp">
      <div class="warp-content">点击上传</div>
      <input type="file" id="file" />
    </div>

    <img :src="imagData" id="img" />
  </div>
</template>

<script lang="ts" setup>
const imagData = ref('')
setTimeout(() => {
  const file = document.getElementById('file')

  const image = document.querySelector('img')
  if (file) {
    file.addEventListener('change', () => {
      const fileData = file.files[0] // 获取到一个FileList对象中的第一个文件( File 对象),是我们上传的文件
      const pattern = /^image/

      if (!pattern.test(fileData.type)) {
        alert('图片格式不正确')
        return
      }

      console.log(fileData.name, 'nam=========')

      // console.log(fileData, 'fileData===========')

      const reader = new FileReader()
      reader.readAsDataURL(fileData) // 异步读取文件内容，结果用data:url的字符串形式表示
      /* 当读取操作成功完成时调用 */

      reader.onload = (e) => {
        console.log(e, 'e===============') // 查看对象
        console.log(reader.result, 'result======') // 要的数据 这里的this指向FileReader（）对象的实例reader
        imagData.value = reader.result as string
      }
    })
  }
}, 3000)
</script>
<style scoped lang="scss">
.warp {
  display: inline-block;
  vertical-align: bottom;
  position: relative;
}

.warp-content {
  border: 1px solid red;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}

input {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid red;
  width: 150px;
  height: 150px;
  opacity: 0;
  cursor: pointer;
}

img {
  width: 300px;
  height: 300px;
  border: 1px solid red;
  margin-top: 50px;
  vertical-align: bottom;
}
</style>
