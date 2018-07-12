import { baseAPI } from "./baseAPI.js";

export class Groups extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'group';
	}

	getGroupById(groupId) {
		return this.axiosObject.get(this.apiBaseName + groupId)
	}

}
