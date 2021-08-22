import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'firebase/auth'
import { FirebaseAuth } from '@/library/Database'

// https://github.com/logaretm/vee-validate/issues/2234
// issues met het importeren van veevalidate

import * as VeeValidate from 'vee-validate'

import 'bulma/css/bulma.css'

// fontawesomeicons

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VeeValidate)

Vue.config.productionTip = false

let baseApp

// firebase auth / redirect naar chat

FirebaseAuth.onAuthStateChanged(() => {
  /* eslint-disable no-new */
  if (!baseApp) {
    baseApp = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
})
