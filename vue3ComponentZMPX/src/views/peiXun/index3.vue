<template>
  <el-form :model="form" label-width="80px" :inline="false">
    <el-form-item label="用户昵称" prop="nickName">
      <el-input v-model="form.nickName" />
    </el-form-item>

    <el-form-item label="登录账号" prop="userName">
      <el-input v-model="form.userName" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nickName: '',
        userName: ''
      }
    }
  }
}
</script>
<style lang="scss">
form {
  background-color: pink;
}
</style>
