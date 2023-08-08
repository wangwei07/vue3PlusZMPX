<template>
  <div>
    <!-- 
  在before-upload钩子中限制用户上传文件的格式和大小
  --></div>
  <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img alt="" v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon">
      <Plus />
    </el-icon>
  </el-upload>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { UploadProps } from 'element-plus'

const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 >= 0.53) {
    ElMessage.error('Avatar picture size can not exceed zMB')
    return false
  }
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must bi JPG format')
    return false
  }

  return true
}
</script>
<style scoped lang="scss"></style>
