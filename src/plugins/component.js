import VipIcon from '@/components/icon/VipIcon.vue'

const components = {
  VipIcon
}

export default {
  install: function (Vue, options) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}
