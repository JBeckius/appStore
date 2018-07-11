import { baseAPI } from "./baseAPI.js";

export class Authenticate extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'Authenticate';

		this.object;
	}

	authenticate(headers) {

		return this.axiosObject.post(this.apiBaseName, null, headers);
	}

	create(dataObject) {
		return this.axiosObject.post(this.apiBaseName + '/Create', dataObject);
	}
}
