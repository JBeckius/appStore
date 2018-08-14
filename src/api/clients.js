import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Clients extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = '/client';
	}

	// getGroupById(groupId) {
	// 	return this.axiosObject.get(this.apiBaseName + groupId)
	// }

}
