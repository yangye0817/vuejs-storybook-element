import { storiesOf } from '@storybook/vue'
import {
  text
} from '@storybook/addon-knobs/vue'

import {
  VipDataTable
} from './index'
import * as data from '../../mock/sample'
import moment from 'moment'
import axios from 'axios'

const columns = [
  { type: 'selection' },
  { prop: 'id', label: 'Id', width: '80px' },
  { prop: 'name', label: 'Name', width: '150px', sortable: true },
  { prop: 'address', label: 'Address' },
  { prop: 'phone', label: 'Phone' },
  { prop: 'modifyDate',
    label: 'Modify Date',
    width: '160px',
    render: row => {
      const { modifyDate } = row
      return moment(modifyDate).format('YYYY-MM-DD HH:mm:ss')
    }
  }
]

storiesOf('DataTable', module)
  .add('default', () => {
    return ({
      components: {VipDataTable},
      data () {
        return {
          columns: columns,
          data: data.list
        }
      },
      template: `
<vip-data-table
  :height="700"
  :columns="columns"
  :data="data"
  :total="data.length">
</vip-data-table>
      `
    })
  })
  .add('with search(local)', () => {
    return ({
      components: { VipDataTable },
      data () {
        return {
          formOptions: {
            formItems: [
              { prop: 'name', label: 'Name', placeholder: 'Input Name' },
              { prop: 'modifyDate', label: 'Modify Date', itemType: 'datetimerange' }
            ]
          },
          columns: columns,
          data: data.list
        }
      },
      template: `
<vip-data-table
  :form-options="formOptions"
  :height="570"
  :columns="columns"
  :data="data"
  :style="{width: '990px'}">
</vip-data-table>
      `
    })
  })
  .add('with search(server)', () => {
    return ({
      components: { VipDataTable },
      data () {
        return {
          formOptions: {
            formItems: [
              { prop: 'title', label: 'Title', placeholder: 'Input Title' }
            ]
          },
          columns: [
            { prop: 'id', label: 'Id', width: '50px' },
            { prop: 'title', label: 'Title' },
            { prop: 'userId', label: 'userId', width: '100px' }
          ],
          loading: false,
          data: []
        }
      },
      template: `
<vip-data-table
  :form-options="formOptions"
  :loading="loading"
  :columns="columns"
  :data="data"
  :style="{width: '900px'}">
</vip-data-table>
      `,
      mounted () {
        this.getList()
      },
      methods: {
        async getList () {
          let res = await axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'
          })
          this.data = res.data
        }
      }
    })
  })
