import axios from 'axios';

export class baseAPI {
	
	constructor(baseURLPath) {
		this.axiosObject = axios.create({
			baseURL: baseURLPath
		});
		this.apiBaseName = '';
	}

	setUserHeader(userId) {
		this.axiosObject.defaults.headers.common['user'] = userId;
	}

	setNationalUserHeader(nationalId) {
		this.axiosObject.defaults.headers.common['DPTS_ID'] = nationalId;
	}
}