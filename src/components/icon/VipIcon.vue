<template>
  <i
    :class="icon"
    class="vip-icon fas"
    @click="click"></i>
</template>

<script>
export default {
  name: 'VipIcon',
  props: {
    iconName: {
      type: String
    }
  },
  data () {
    return {
      icon: `fa-${this.iconName}`
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vip-icon {
  vertical-align: middle;
  margin-right: .3rem;
  text-align: center;
  font-size: 1rem;
}
</style>
