import { baseAPI } from "./baseAPI.js";

export class Apps extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'app';
	}

	getAppById(appId) {
		return this.axiosObject.get(this.apiBaseName + appId)
	}

}
