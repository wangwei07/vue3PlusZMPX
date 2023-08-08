<template>
  <div class="sidebar-container">
    <p class="itemName">主动预警研发平台</p>
    <img src="@/assets/images/nav/logo.png" class="logo" />

    <el-menu
      :default-active="activeMenu"
      background-color="transparent"
      text-color=" #fff"
      :unique-opened="true"
      active-text-color="#3EF2B8"
      mode="horizontal"
      menu-trigger="click"
      :ellipsis="true"
      @select="handleSelect"
    >
      <SidebarItem
        v-for="(route, index) in sidebarRouters"
        :key="route.path + index"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
    <div class="tx"></div>

    <Navbar />
  </div>
</template>

<script lang="ts" setup>
import { Navbar } from '../index'
import SidebarItem from './SidebarItem.vue'
import usePermissionStore from '@/store/modules/permission'

const route = useRoute()
const permissionStore = usePermissionStore()

const sidebarRouters: any = computed(() => permissionStore.sidebarRouters)

const activeMenu = computed(() => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 更多处理
onMounted(() => {
  setTimeout(() => {
    const ele2 = document.querySelector(
      '.el-sub-menu__hide-arrow'
    ) as HTMLElement
    if (!ele2) return
    const ele = ele2.querySelector('.el-sub-menu__title')
    if (!ele) return
    const html = `   
     <span  class='sp'>更多</span>
     <i class="el-icon" data-v-33ec43fc=""><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-33ec43fc="">
        <path fill="currentColor" d="m192 384 320 384 320-384z"></path></svg>
      </i>
          `
    ele.innerHTML = html
  }, 300)
})
</script>
<style lang="scss" scoped>
.sidebar-container {
  // reset element-ui css
  height: 90px;
  background: url(@/assets/images/nav/bg.png) no-repeat center 4px;
  background-size: 100% 100%;
  display: flex;
  .itemName {
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    height: 30px;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
  }
  .logo {
    width: 187px;
    height: 28px;
    margin: 18px 10px 0 22px;
  }
  /* 最大的el-menu */
  .el-menu {
    font-size: 16px;
    width: calc(100% - 380px);
    // min-width: 1550px;
    & > div {
      margin-top: 6px;
      width: 94px;
      min-width: 94px;
      height: 46px;
      /*       border: 1px solid red; */
      :deep(li) {
        padding: 0 30px !important;
      }
      @media screen and (max-width: 1570px) {
        // padding: 0 26px;
      }

      &:nth-child(5) {
        padding-right: 530px;
        /* 这里设置最小宽度 */
        min-width: 630px;
      }
      span {
        font-size: 16px !important;
      }
      :deep(a:focus) {
        display: none !important;
        background: transparent url(@/assets/images/nav/active.png) no-repeat
          center;
        background-size: 100% 100%;
      }
      :deep(a:hover) {
        cursor: pointer;
        background: none !important;
      }
      :deep(.el-menu-item) {
        &:focus {
          cursor: pointer;
          background-color: none !important;
        }
      }
    }
  }

  .avatar-wrapper {
    margin-top: 5px;
    position: relative;

    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    i {
      cursor: pointer;
      position: absolute;

      top: 25px;
      font-size: 12px;
    }
  }
  .tx {
    // width: 100px;
  }
}
</style>
<style lang="scss" scoped>
:deep(.el-menu-item),
:deep(.menu-title) {
  font-size: 16px;
  line-height: 1.2;
  white-space: normal !important;
}
/* 清除所有padding，方便在父级div统一设置 */
:deep(.el-menu-item) {
  padding: 0px !important;
}

:deep(.el-sub-menu__title) {
  font-size: 16px;
  padding: 8px 0px 0 !important;
}
:deep(.el-sub-menu__icon-arrow) {
  display: none;
}
:deep(.el-sub-menu__title) {
  height: 46px;
}

:deep(a:hover) {
  background-color: transparent !important;
}
</style>

<style lang="scss">
.el-popper {
  border: 0 !important;
}
/* 删除下面的边框 */
.el-menu--horizontal {
  border: 0;
}
.el-popper .el-menu--horizontal {
  line-height: 40px;
  background: #002f3b url(@/assets/images/nav/dropBg.png) no-repeat top center !important;
  border-bottom: 1px solid #3ef2b8;
  margin-left: -42px;
}
.el-popper .el-menu--horizontal .el-menu-item .menu-title {
  width: 100%;
  text-align: center !important;
}
.nest-menu a li:hover {
  background-color: rgba(0, 127, 125, 0.7) !important;
}
.nest-menu a li.is-active {
  background-color: rgba(0, 127, 125, 0.5) !important;
}
.el-sub-menu.is-active {
  background: url(@/assets/images/nav/active.png) no-repeat center;
  background-size: 100% 100%;
}
.router-link-active.router-link-exact-active {
  background: transparent url(@/assets/images/nav/active.png) no-repeat center;
  background-size: 100% 100%;
}
</style>

<!-- 省略号设置 -->
<style lang="scss" scoped>
:deep(.el-sub-menu__hide-arrow) {
  height: 66px;
  .sp {
    margin: 0 -7px 0 15px;
  }
}
</style>

<style lang="scss">
.el-menu--popup {
  min-width: 100px !important;
}
</style>
