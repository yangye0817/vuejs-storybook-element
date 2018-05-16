import { storiesOf } from '@storybook/vue'

import {
  VipHeader,
  VipSidebar,
  VipFooter,
  VipBreadcrumb
} from './index'

const languages = {
  en: {
    title: 'English'
  },
  ko: {
    title: 'Korean'
  }
}
const loginUser = {
  account: {
    title: 'Account'
  },
  logout: {
    title: 'Logout'
  }
}
const menuItems = {
  menu1: {
    title: 'One',
    icon: 'recent_actors',
    path: '/one',
    items: {
      subOne: {
        title: 'One-1',
        path: '/1'
      },
      subTwo: {
        title: 'One-2',
        path: '/2'
      }
    }
  },
  menu2: {
    title: 'Three',
    icon: 'settings',
    path: '/three'
  }
}

storiesOf('Layout', module)
  .add('header', () => {
    return ({
      components: { VipHeader },
      data () {
        return {
          brand: {
            title: 'Brand',
            href: '/'
          },
          locale: {
            currentLang: 'English',
            menus: languages
          },
          loginUser: {
            username: '사용자1',
            menus: loginUser
          }
        }
      },
      template: `
        <vip-header
          :brand="brand"
          :language="locale"
          :login-user="loginUser"></vip-header>`
    })
  })
  .add('sidebar', () => {
    return ({
      components: { VipSidebar },
      data () {
        return {
          menus: menuItems
        }
      },
      template: `<vip-sidebar :menus="menus"></vip-sidebar>`
    })
  })
  .add('footer', () => {
    return ({
      components: { VipFooter },
      data () {
        return {
          copyright: 'Copyright'
        }
      },
      template: `<vip-footer :copyright="copyright"></vip-footer>`
    })
  })
  .add('breadcrumb', () => {
    return ({
      components: { VipBreadcrumb },
      data () {
        return {
          itemList: { live: { title: 'Live', path: '/' }, detection: { title: 'Detection' } }
        }
      },
      template: `<vip-breadcrumb :item-list="itemList"></vip-breadcrumb>`
    })
  })
