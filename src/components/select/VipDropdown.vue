<template>
  <el-dropdown
    class="vip-dropdown"
    trigger="click"
    @command="handleCommand">
    <div class="title">
      <vip-icon
        v-if="iconName"
        :icon-name="iconName"></vip-icon>
      <span class="title__text">{{ title }}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(menu, key) in menus"
        :command="key"
        :key="key">{{ menu.title }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'VipDropdown',
  props: {
    iconName: {
      type: String
    },
    title: {
      type: String
    },
    menus: {
      type: Object
    }
  },
  methods: {
    handleCommand (command) {
      this.$emit('select', command)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vip-dropdown {
  padding: .5rem;
  border: 1px solid;
  border-radius: .3rem;

  .title {
    cursor: pointer;
    > * {
      vertical-align: middle;
    }
    >.vip-icon {
      margin-right: 0;
    }
  }
}
</style>
