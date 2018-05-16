import { storiesOf } from '@storybook/vue'
import {
  text
} from '@storybook/addon-knobs/vue'

import VipIcon from './VipIcon'

storiesOf('Icon', module)
  .add('default', () => {
    const iconName = text('iconName', 'calendar-alt')

    return ({
      components: { VipIcon },
      data () {
        return {
          iconName: iconName
        }
      },
      methods: {
        click () {
          console.log('icon click !!')
        }
      },
      template: ` 
        <vip-icon :icon-name=iconName @click="click"></vip-icon>`
    })
  })
