<template>
  <div class="fullContent"><slot></slot></div>
</template>
<style lang="scss">
.fullContent {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgb(236, 218, 218);
}
</style>
