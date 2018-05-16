<template>
  <el-form
    ref="form"
    :model="params"
    :inline="inline"
    :label-width="labelWidth ? (labelWidth + 'px') : ''"
    size="small"
    class="vip-search-form">

    <el-form-item
      v-for="(item, index) in formItems"
      :key="index"
      :prop="item.prop"
      :label="item.label">
      <!-- input : default -->
      <el-input
        v-if="item.itemType === 'input' || item.itemType === undefined"
        v-model.trim="params[item.prop]"
        :placeholder="item.placeholder"
        :style="{width: (item.width ? `${item.width}px` : '') }"
        @keyup.enter.native="search"></el-input>
      <!-- checkbox -->
      <el-checkbox-group
        v-if="item.itemType === 'checkbox'"
        v-model="params[item.prop]">
        <el-checkbox
          v-for="(option, index) in item.options"
          :key="index"
          :label="option.lable"></el-checkbox>
      </el-checkbox-group>
      <!-- date -->
      <el-date-picker
        v-else-if="item.itemType === 'datetimerange'"
        v-model="params[item.prop]"
        type="datetimerange"
        start-placeholder="Start Date"
        end-placeholder="End Date"></el-date-picker>
    </el-form-item>

    <el-form-item class="btn-group">
      <el-button
        type="primary"
        size="small"
        @click="search"><vip-icon icon-name="search"></vip-icon>
        {{ submitBtnText }}</el-button>
      <el-button
        v-if="showResetBtn"
        type="info"
        size="small"
        @click="reset"><vip-icon icon-name="undo"></vip-icon>
        {{ resetBtnText }}</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  name: 'VipSearchForm',
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: Number
    },
    submitBtnText: {
      type: String,
      default: 'Search'
    },
    showResetBtn: {
      type: Boolean,
      default: true
    },
    resetBtnText: {
      type: String,
      default: 'Reset'
    },
    formItems: {
      type: Array,
      required: true
    }
  },
  data () {
    let params = this.formItems.reduce((result, item) => {
      result[item.prop] = item.value
      return result
    }, {})

    return {
      params
    }
  },
  methods: {
    reset () {
      this.$refs['form'].resetFields()
      this.$emit('reset')
    },
    search () {
      let { params, formItems } = this
      let validParams = {}
      this.$_.map(params, (val, key) => {
        if (!this.$_.isEmpty(val) && val !== undefined) {
          let item = this.$_.find(formItems, {prop: key})
          validParams[key] = {value: val, itemType: item.itemType}
        }
      })
      this.$emit('search', validParams)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.vip-search-form {
  background: #eee;
  border: 1px #e0e0e0 solid;
  padding: .3rem;
  margin-bottom: 2rem;

  .btn-group {
    button {
      width: 90px;
      .vip-icon {
        font-size: .7rem;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss">
.vip-search-form .el-form-item {
  margin-bottom: 0;
  vertical-align: middle;
}
</style>
