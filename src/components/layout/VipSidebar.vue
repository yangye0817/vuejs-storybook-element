<template>
  <el-aside
    :class="{sidebarCollapse: isCollapse}"
    class="vip-sidebar">
    <el-menu
      :collapse="isCollapse"
      mode="vertical"
      @select="onSelectItem">
      <template v-for="(menu, key) in menus">
        <el-submenu
          v-if="menu.items"
          :key="key"
          :index="menu.path">
          <template slot="title">
            <vip-icon
              v-if="menu.icon"
              :icon-name="menu.icon"></vip-icon>
            <span>{{ menu.title }}</span>
          </template>
          <el-menu-item
            v-for="(subMenu, subKey) in menu.items"
            :key="key + '.' + subKey"
            :index="menu.path + '/' + subMenu.path">
            {{ subMenu.title }}
          </el-menu-item>
        </el-submenu>

        <el-menu-item
          v-else
          :key="key"
          :index="menu.path">
          <vip-icon
            v-if="menu.icon"
            :icon-name="menu.icon"></vip-icon>
          <span>{{ menu.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'VipSidebar',
  props: {
    menus: {
      type: [Array, Object]
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSelectItem (key, keyPath) {
      this.$emit('select', key.replace(/\/{2,}/g, '/').replace(/\/$/, ''), keyPath)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  $collapse-width: 64px;
  .vip-sidebar, .el-menu {
    height: 100%;
  }
  .sidebarCollapse {
    width: $collapse-width + 1 !important;
  }
  .el-menu--collapse {
    width: $collapse-width !important;
  }
</style>
