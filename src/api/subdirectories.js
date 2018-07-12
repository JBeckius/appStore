import { baseAPI } from "./baseAPI.js";

export class Subdirectories extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'group/list/subdirectory';
	}

	getGroupById(groupId) {
		return this.axiosObject.get(this.apiBaseName + groupId)
	}

}
