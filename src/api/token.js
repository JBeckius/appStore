import { baseAPI } from "./baseAPI.js";
import querystring from 'querystring';

export class Token extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'token';

		this.object;
	}

	getToken({password, username}, headers) {
		let formData = new FormData();
		formData.set('grant_type', 'password');
		formData.set('username', username);
		formData.set('password', password);
		console.log(formData);
		let data = {
			password,
			username,
			grant_type: 'password'
		}
		console.log('token request data: ', data);

		return this.axiosObject.post(this.apiBaseName, querystring.stringify(data), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	}

	authenticate(headers) {

		return this.axiosObject.post(this.apiBaseName, null, headers);
	}

	create(dataObject) {
		return this.axiosObject.post(this.apiBaseName + '/Create', dataObject);
	}
}
