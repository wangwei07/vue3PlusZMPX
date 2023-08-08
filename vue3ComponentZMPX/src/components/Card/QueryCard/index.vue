<template>
  <div class="card">
    <ZmDl title="筛选条件"></ZmDl>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  background: rgba(0, 36, 40, 0.4);
  border-radius: 4px;
  margin-bottom: 16px;
}
</style>
