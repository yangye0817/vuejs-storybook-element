<template>
  <div class="err-bg">
    <div class="middle">
      <div>
        <div>
          <img :src="errorImage.img">
          <p><strong>{{ errorImage.msg }}</strong></p>
        </div>
        <div v-if="statusCode >= 500">
          <p>We're experiencing an internal server problem. Please try again later.</p>
          <p>If the problem persists,
            <a href="mailto:visionai@sk.com">
              <strong>
                contact us </strong>
            </a>
            for assistance.
          </p>
        </div>
        <br>
        <el-button
          type="primary"
          plain="">Home</el-button>
        <el-button
          type="info"
          plain="">Back</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data () {
    return {
      statusCode: this.$route.params.statusCode
    }
  },
  computed: {
    errorImage () {
      let img, msg
      switch (this.statusCode) {
        // case 400: Bad Request
        // case 403: Forbidden
        // case 408: Request Timeout
        // case 502: Bad Gateway
        // case 503: Service Temporarily Unavailable
        // case 504: Gateway Timeout

        case 401:
          img = '/static/img/401.png'
          msg = 'You are not authorized to view tihs page.'
          break
        case 404:
          img = '/static/img/404.png'
          msg = 'Page doesn\'t exist or some other error occurred.'
          break
        case 500:
          img = '/static/img/500.png'
          msg = 'Something went wrong on our end.'
          // msg = 'Sorry, It\'s not you. It\'s us.'
          break
        default:
          msg = 'Unknown Error' // The Status Code for the 'Unknown Error' is 520.
      }
      return { img, msg }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.err-bg {
  /*background: #ffffff;*/
  display:table-cell;
  /*background-position: bottom right;*/
  top:0; bottom:0; left:0; right:0;
  position: absolute;
  display: -webkit-flex;display:flex;
  -webkit-align-items:center;align-items: center;/*위아래 중앙*/
  -webkit-justify-content: center;justify-content: center;/*양옆 중앙*/
}
.middle {
  margin: 10px;
  text-align: center;
  a {
    &:link, &:visited, &:active, &:hover {
      text-decoration: none; color: #ff4040;
    }
  }
}
</style>
