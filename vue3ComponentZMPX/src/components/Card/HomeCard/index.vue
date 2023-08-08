<template>
  <div class="card">
    <header>
      <svg-icon class="icon" :icon-class="icon" :color="color" />
      <span class="title">{{ title }}</span>
    </header>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps(['icon', 'title', 'color'])

const co = '#447f49'
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  border: 1px solid #139274;
  border-radius: 20px;
  header {
    height: 58px;
    line-height: 58px;
    border-bottom: 1px solid #d4d4d4;
  }
  .icon {
    font-size: 28px;
    margin: 0 16px 0 12px;
    vertical-align: middle;
  }

  .title {
    font-size: 18px;
  }
}
</style>
