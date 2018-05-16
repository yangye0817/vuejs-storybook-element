<template>
  <el-footer class="vip-footer">
    <p class="copyright">&copy; {{ copyright }}</p>
  </el-footer>
</template>

<script>
export default {
  name: 'VipFooter',
  props: {
    copyright: {
      type: String
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vip-footer {
  background-color: #909399;
  color: #fff;
  display: flex;
  align-items: center;
}
</style>
