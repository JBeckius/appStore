import axios from 'axios';
import store from '../store/store.js';

export class baseAPI {

	constructor(baseURLPath) {
		this.axiosObject = axios.create({
			baseURL: baseURLPath
		});
		this.axiosObject.interceptors.request.use((config)=> {
			store.commit('updateLoading', true);
			return config;
		});
		this.axiosObject.interceptors.response.use(function(resp) {
			// console.log('resp: ', resp);
			store.commit('updateLoading', false);
			if (resp.status === 401) {
				console.log('401, holmes');
				localStorage.removeItem('access_token');
				window.reload();
				return;
			}
			return resp;
		},
		function(err) {
			store.commit('updateLoading', false);
			console.log('axios error: ', err);
			if(JSON.stringify(err).includes('status code 401')) {
				console.error('401, holmes', err);
				localStorage.removeItem('access_token');
				location.reload();
				return;
			}
		}
	)
		this.apiBaseName = '';
	}

	setUserHeader(userId) {
		this.axiosObject.defaults.headers.common['user'] = userId;
	}

	setNationalUserHeader(nationalId) {
		this.axiosObject.defaults.headers.common['DPTS_ID'] = nationalId;
	}

	setAuthorizationHeader(authToken) {
		this.axiosObject.defaults.headers.common['Authorization'] = ('Bearer ' + authToken);
	}
}
