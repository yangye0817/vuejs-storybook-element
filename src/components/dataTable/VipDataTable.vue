<template>
  <div class="vip-data-table">

    <vip-search-form
      v-if="formOptions"
      :form-items="formOptions.formItems"
      :inline="formOptions.inline"
      :label-width="formOptions.labelWidth"
      :show-reset-btn="formOptions.showResetBtn"
      :submit-btn-text="formOptions.submitBtnText"
      :reset-btn-text="formOptions.resetBtnText"
      @reset="searchHandler"
      @search="searchHandler"></vip-search-form>

    <slot></slot>

    <el-table
      v-loading="isLoading"
      :data="tableData"
      :height="height"
      :border="true">

      <template v-for="(col, index) in columns">
        <el-table-column
          v-if="col.render"
          :key="index"
          :label="col.label"
          :width="col.width">
          <template slot-scope="scope">
            <span v-html="col.render(scope.row)"></span>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :type="col.type"
          :prop="col.prop"
          :label="col.label"
          :width="col.width"
          :sortable="col.sortable">
        </el-table-column>
      </template>

    </el-table>

    <div class="pagination">
      <el-pagination
        :total="total"
        :current-page="pagination.pageIndex"
        :page-size="pagination.pageSize"
        :page-sizes="pageSizes"
        layout="prev, pager, next, total, sizes"
        @size-change="pageSizeChangeHandler"
        @current-change="pageIndexChangeHandler">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import VipSearchForm from '../search/VipSearchForm'

export default {
  name: 'VipDataTable',
  components: {
    VipSearchForm
  },
  props: {
    isServerSide: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 50, 100]
      }
    },
    formOptions: {
      type: Object
    }
  },
  data () {
    return {
      isLoading: this.loading,
      pagination: {
        pageIndex: 1,
        pageSize: (() => {
          return (this.pageSizes.length > 0) ? this.pageSizes[0] : 20
        })()
      },
      localData: [],
      tableData: [], // paging 처리된 데이타
      total: 0
    }
  },
  watch: {
    data: function (val) {
      this.loadTableData(val)
    },
    loading: (val) => {
      this.isLoading = val
    }
  },
  mounted () {
    this.loadTableData(this.data)
  },
  methods: {
    /** table에 출력할 데이타를 가져온다 **/
    loadTableData (data) {
      this.localData = data
      this.total = data.length
      this.setPaginationData()
    },
    /** 페이징 처리를 위한 데이터를 조립해서 테이블에 출력한다 **/
    setPaginationData (data = this.localData) {
      const { pageIndex, pageSize } = this.pagination
      this.tableData = data.filter((row, i) => {
        return i >= (pageIndex - 1) * pageSize && i < pageIndex * pageSize
      })
    },
    /** 페이지 인덱스 변경 시 **/
    pageIndexChangeHandler (pageIndex) {
      this.pagination.pageIndex = pageIndex
      this.isServerSide ? this.$emit('search', { pageIndex }) : this.setPaginationData()
    },
    /** 페이지 사이즈 변경 시 **/
    pageSizeChangeHandler (pageSize) {
      this.pagination.pageSize = pageSize
      this.isServerSide ? this.$emit('search', { pageSize }) : this.setPaginationData()
    },
    /** 검색 조건에 맞는 데이타를 가져온다 **/
    searchHandler (params) {
      console.log('click search button', { params }, this.$_.isEmpty(params))

      if (!this.isServerSide) {
        let data = this.data
        this.isLoading = true

        if (!this.$_.isEmpty(params)) {
          data = this.$_.filter(this.data, row => {
            let result = this.$_.keys(params).reduce((result, key) => {
              let {value, itemType} = params[key]
              let rowValue = row[key]
              if (itemType === 'datetimerange') {
                result.push(this.$moment(rowValue).isSameOrAfter(value[0]) &&
                  this.$moment(rowValue).isSameOrBefore(value[1]))
              } else {
                result.push(new RegExp(value, 'ig').test(rowValue))
              }
              return result
            }, [])
            return this.$_.includes(result, true)
          })
        }

        this.loadTableData(data)
        this.isLoading = false
      } else {
        this.$emit('search', { params })
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pagination {
  margin-top: 1rem;
  text-align: right;
}
</style>

<style rel="stylesheet/scss" lang="scss">
.vip-data-table {
  .el-table__header tr th {
    background-color: #f5f7fa;
  }
}
</style>
