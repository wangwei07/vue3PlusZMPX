<template>
  <div class="card">
    <header>
      <slot name="header"></slot>
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
  position: relative;
  width: 100%;
  flex: 1;
  overflow: hidden;
  padding: 20px;
  background: rgba(0, 36, 40, 0.4);
  border-radius: 4px;
  border: 0px solid red;
  header {
    margin-bottom: 20px;
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
