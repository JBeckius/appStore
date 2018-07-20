import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Groups extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'group';
	}

	addAD({clientName, adName, id}={}) {
		let data = {
			clientName,
			adName,
			id
		};
		return this.axiosObject.post(this.apiBaseName + '/AD', data, {
			headers: {
				"Content-Type":"application/json"
			}
		});
	}

}
