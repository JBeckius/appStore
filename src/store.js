import Vue from 'vue'
import Vuex from 'vuex'
import apiManager from './api/apiManager.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		apps: [],
		accessToken: null
  },
  mutations: {
		updateApps(state, apps) {
			state.apps = apps;
		},
		setAccessToken(state, token) {
			state.accessToken = token;
		}
  },
  actions: {
		updateApps({ commit }) {

		},
		getAccessToken({ commit }, creds) {
			return apiManager.Token.getToken(creds)
			.then(resp => {
				let token = resp.data.access_token;
				localStorage.set('access_token', token);
				return commit( 'setAccessToken', token );
			})

		}
  }
})
