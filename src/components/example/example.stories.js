import { storiesOf } from '@storybook/vue'

import {
  VipEditForm
} from './index'
import i18n from '../../i18n'

storiesOf('example', module)
  .add('edit form', () => {
    return ({
      i18n,
      components: {VipEditForm},
      data () {
        return {
        }
      },
      template: `<vip-edit-form></vip-edit-form>`
    })
  })
