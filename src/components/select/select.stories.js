import { storiesOf } from '@storybook/vue'
import {
  text
} from '@storybook/addon-knobs/vue'

import {
  VipDropdown
} from './index'

const languages = {
  en: {
    title: 'English'
  },
  ko: {
    title: 'Korean'
  }
}

storiesOf('Select', module)
  .add('dropdown', () => {
    return ({
      components: { VipDropdown },
      data () {
        return {
          icon: 'globe',
          title: 'English',
          menus: languages
        }
      },
      template: `
        <vip-dropdown
          :icon-name="icon"
          :title="title"
          :menus="menus"></vip-dropdown>`
    })
  })
