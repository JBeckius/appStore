import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Clients extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = '/client';
	}

	addGroups(clientId, groupIds) {
		let data = {
			clientId,
			groupIds
		}
		return this.axiosObject.post(this.apiBaseName + '/groups', data);
	}

	// getGroupById(groupId) {
	// 	return this.axiosObject.get(this.apiBaseName + groupId)
	// }

}
