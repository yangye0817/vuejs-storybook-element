<template>
  <el-container>
    <vip-header
      id="header"
      :brand="brand"
      :language="language"
      :login-user="loginUser"
      @toggleCollapse="toggleSidebar"
      @selectLang="changeLanguage"
      @selectUserMenu="selectUserMenu"></vip-header>

    <el-container id="container">
      <vip-sidebar
        id="sidebar"
        :menus="menus"
        :is-collapse="isCollapse"
        @select="selectMenu"></vip-sidebar>

      <el-main id="main">
        <vip-breadcrumb
          v-if="$_.size(breadcrumb) !== 0"
          :item-list="breadcrumb"></vip-breadcrumb>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {
  VipHeader,
  VipSidebar,
  VipBreadcrumb
} from '@/components/layout/index'
import { mapGetters } from 'vuex'
import languages from '@/i18n/languages'

export default {
  name: 'Layout',
  components: {
    VipHeader,
    VipSidebar,
    VipBreadcrumb
  },
  props: {
    lang: {
      type: String
    }
  },
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
    ]),
    brand () {
      return this.$t('layout.header.brand')
    },
    language () {
      return {
        currentLang: languages[this.lang].title,
        menus: languages
      }
    },
    loginUser () {
      return {
        username: '사용자',
        menus: this.$t('layout.header.loginUser')
      }
    },
    menus () {
      return this.$t('layout.menu')
    },
    breadcrumb () {
      let name = this.$route.name
      return name.split('.items.').reduce((result, key, index) => {
        let menu = this.$t(`layout.menu.${index === 0 ? key : name}`)
        result.push({ title: menu.title, path: menu.path })
        return result
      }, [])
    }
  },
  methods: {
    toggleSidebar (active) {
      this.isCollapse = active
    },
    changeLanguage (lang) {
      this.$router.replace({params: {lang}})
    },
    selectUserMenu (menu) {
      console.log('selectUserMenu :', menu)
    },
    selectMenu (path) {
      this.$router.push(`/${this.lang}${path}`)
    }
  }
}
</script>
