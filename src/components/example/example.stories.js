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
  .add('dialog form', () => {
    return ({
      i18n,
      components: {VipEditForm},
      data () {
        return {
          visible: false
        }
      },
      template: `
<div>
  <el-button @click="visible = true">open dialog</el-button>

  <el-dialog title="Edit Form" :visible.sync="visible" width="80%">
    <vip-edit-form></vip-edit-form>
  </el-dialog>
</div>
      `
    })
  })
