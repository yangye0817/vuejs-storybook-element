<template>
  <el-breadcrumb
    class="vip-breadcrumb"
    separator="/">
    <el-breadcrumb-item
      v-for="(item, key) in itemList"
      :key="key">
      <a
        v-if="activeLink && item.path"
        :href="item.path">{{ item.title }}</a>
      <span v-else>{{ item.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'VipBreadcrumb',
  props: {
    itemList: {
      type: [Object, Array]
    },
    activeLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.vip-breadcrumb.el-breadcrumb {
  display: inline-block;
  line-height: 50px;
}
</style>
