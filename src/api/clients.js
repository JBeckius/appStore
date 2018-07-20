import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Clients extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'group/list/client';
	}

	// getGroupById(groupId) {
	// 	return this.axiosObject.get(this.apiBaseName + groupId)
	// }

}
