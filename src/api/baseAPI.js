import axios from 'axios';

export class baseAPI {

	constructor(baseURLPath) {
		this.axiosObject = axios.create({
			baseURL: baseURLPath
		});
		this.axiosObject.interceptors.response.use(function(resp) {
			// console.log('resp: ', resp);
			if (resp.status === 401) {
				console.log('401, holmes');
				localStorage.removeItem('access_token');
				window.reload();
				return;
			}
			return resp;
		},
		function(err) {
			console.log('axios error: ', err);
			if(JSON.stringify(err).includes('401')) {
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
