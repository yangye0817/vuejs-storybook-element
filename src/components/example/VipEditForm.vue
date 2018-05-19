<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    label-width="120px"
    size="small">

    <el-form-item
      label="First Name"
      prop="fName">
      <el-input v-model="form.fName"></el-input>
    </el-form-item>

    <el-form-item
      label="Middle Name"
      prop="mName">
      <el-input v-model="form.mName"></el-input>
    </el-form-item>

    <el-form-item
      label="Last Name"
      prop="lName">
      <el-input v-model="form.lastName"></el-input>
    </el-form-item>

    <el-form-item
      label="Gender"
      prop="gender">
      <el-radio-group
        v-model="form.gender">
        <el-radio
          label="Male"
          name="gender"></el-radio>
        <el-radio
          label="FeMale"
          name="gender"></el-radio>
        <el-radio
          label="Unknown"
          name="gender"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item
      label="Type"
      prop="concernType">
      <el-radio-group
        v-model="form.concernType">
        <el-radio
          label="General"
          name="concernType"></el-radio>
        <el-radio
          label="Black"
          name="concernType"></el-radio>
        <el-radio
          label="White"
          name="concernType"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item
      label="Nationality"
      prop="nationality">
      <el-select
        v-model="form.nationality">
        <el-option
          label="KR"
          value="kr"></el-option>
        <el-option
          label="US"
          value="us"></el-option>
        <el-option
          label="JP"
          value="jp"></el-option>
      </el-select>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  name: 'VipEditForm',
  props: {
  },
  data () {
    return {
      form: {},
      rules: {
        fName: [{ required: true, message: this.$t('common.validation.required', ['First Name']) }],
        gender: [{ required: true, message: this.$t('common.validation.required', ['Gender']) }],
        concernType: [{ required: true, message: this.$t('common.validation.required', ['ConcernType']) }]
      }
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

<style rel="stylesheet/scss" lang="scss">
</style>
