import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || {},
    identity: '',
    userID: ''
  },
  mutations: {
    Token(state,params){
      state.token = params.token;
      state.identity = params.identity;
      state.userID = params.userID;
      localStorage.setItem('token',params.token)
      localStorage.setItem('identity',params.identity)
      localStorage.setItem('userID',params.userID)
    },
    del_token(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
  },
  modules: {

  }
})

export default store
