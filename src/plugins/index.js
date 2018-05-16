import Vue from 'vue'

/* ui component */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* javascript library */
import Lodash from './lodash'
import Moment from './moment'
/* component plugins */
import VipComponent from './component'

/** Install Plugins **/
Vue.use(Element)
Vue.use(Lodash)
Vue.use(Moment)
Vue.use(VipComponent)
