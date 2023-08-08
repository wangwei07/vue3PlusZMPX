<template>
  <header>
    <span class="tree_line"></span>
    <span class="title">{{ title }}</span>
  </header>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>
<style scoped lang="scss">
header {
  display: flex;
  margin: 18px 0 30px 0;
}
.tree_line {
  width: 30px;
  height: 20px;
  background: url(@/assets/images/common/sx.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 10px;
}

.title {
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
}
</style>
