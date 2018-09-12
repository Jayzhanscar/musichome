import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const user = {
  state: {
    status: false,
    nike: null,
    token: null,
    pic: null,
    phonenum: null,
    isLogin: false,
    dialogFormVisible: false
  }
}
export default new Vuex.Store({
  modules: {
    user: user
  }
})
