import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Apps extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'app';
	}
	upload(app) {
		return this.axiosObject.post(this.apiBaseName, app, {
			headers: {
				'Content-type': 'application/json'
			}
		})
	}
}
