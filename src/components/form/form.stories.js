import { storiesOf } from '@storybook/vue'

import {
  VipSearchForm
} from './index'

const forms = [
  { prop: 'name', label: 'Name', placeholder: 'Input Name', width: 200 },
  { prop: 'company', label: 'Company' },
  { prop: 'submitDate', label: 'Submit Date', itemType: 'datetimerange' }
]

storiesOf('Search Form', module)
  .add('default', () => {
    return ({
      components: {VipSearchForm},
      data () {
        return {
          forms: forms
        }
      },
      template: `<vip-search-form :form-items="forms" :style="{width: '980px'}"></vip-search-form>`
    })
  })
  .add('no reset button', () => {
    return ({
      components: {VipSearchForm},
      data () {
        return {
          forms: forms
        }
      },
      template: `<vip-search-form
        :form-items="forms" :style="{width: '600px'}"
        :inline="false"
        :label-width="100"
        :show-reset-btn="false"></vip-search-form>`
    })
  })
  .add('button text', () => {
    return ({
      components: {VipSearchForm},
      data () {
        return {
          forms: forms
        }
      },
      template: `<vip-search-form
        :form-items="forms" :style="{width: '600px'}"
        :inline="false"
        :label-width="100"
        :submit-btn-text="'검색'"
        :reset-btn-text="'리셋'"></vip-search-form>`
    })
  })
