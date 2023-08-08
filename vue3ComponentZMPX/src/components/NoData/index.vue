<template>
  <div class="noData">
    <img :src="image" alt="" />
  </div>
</template>

<script lang="ts" setup>
import image from '@/assets/images/common/msj.png'
</script>

<style lang="scss" scoped>
.noData {
  position: relative;
  top: 150px;
  height: 215px;

  img {
    width: 210px;
  }
}
</style>
