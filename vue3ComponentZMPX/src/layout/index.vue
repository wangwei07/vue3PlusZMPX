<template>
  <div class="app-wrapper" :class="{ bjshense }">
    <!-- 头部 -->
    <sidebar />
    <!-- 主体 -->
    <div class="main-container" style="display: block">
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import { AppMain } from './components'

// 整这么一出为了区分首页和其他页面的背景色
const router = useRouter()
const bjshense = ref(false)
watch(
  () => router.currentRoute.value.path,
  (value) => {
    if (value === '/index') {
      bjshense.value = false
    } else {
      bjshense.value = true
    }
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
/* 样式特殊用法，高级用法 */
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url(@/assets/images/common/bg.png) no-repeat center center;
  background-size: 100% 100%;
  .main-container {
    flex: 1;
    overflow: hidden;
    position: relative;
    // border: 1px solid gold;
  }
  &.bjshense {
    background: url(@/assets/images/common/bjshense.png) no-repeat center center;
  }
}
</style>
