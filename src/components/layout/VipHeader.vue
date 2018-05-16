<template>
  <el-header class="vip-header">
    <vip-icon
      class="hamburger"
      icon-name="bars"
      @click="toggleClick"></vip-icon>

    <h1 class="brand">
      <a :href="brand.href">{{ brand.title }}</a>
    </h1>

    <div class="menu-group">
      <vip-dropdown
        v-if="language"
        :icon-name="'globe'"
        :title="language.currentLang"
        :menus="language.menus"
        @select="selectLang"></vip-dropdown>

      <vip-dropdown
        v-if="loginUser"
        :icon-name="'user-circle'"
        :title="loginUser.username"
        :menus="loginUser.menus"
        @select="selectUserMenu"></vip-dropdown>
    </div>
  </el-header>
</template>

<script>
import VipDropdown from '../select/VipDropdown'

export default {
  name: 'VipHeader',
  components: {
    VipDropdown
  },
  props: {
    brand: {
      type: Object,
      require: true
    },
    language: {
      type: Object
    },
    loginUser: {
      type: Object
    }
  },
  data () {
    return {
      toggleActive: true
    }
  },
  methods: {
    toggleClick () {
      this.toggleActive = !this.toggleActive
      this.$emit('toggleCollapse', !this.toggleActive)
    },
    selectLang (lang) {
      this.$emit('selectLang', lang)
    },
    selectUserMenu (menu) {
      this.$emit('selectUserMenu', menu)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg-color: #00BCD4;
$font-color: #fff;

%hover {
  opacity: .7;
}

.vip-header {
  display: flex;
  align-items: center;
  background-color: $bg-color;
  color: $font-color;

  > .hamburger {
    float: left;
    cursor: pointer;
    &:hover {
      @extend %hover;
    }
  }

  > .brand {
    font-size: 1.5rem;
    font-weight: 500;
    margin: .6rem;

    a {
      color: currentColor;
      text-decoration: none;
      &:hover {
        @extend %hover;
      }
    }
  }

  > .menu-group {
    flex: 1;
    text-align: right;

    > * {
      border: none;
      background-color: $bg-color;
      color: $font-color;
      &:hover {
        @extend %hover;
      }
    }
  }
}
</style>
