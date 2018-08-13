import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Subdirectories extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'group';
	}

	// getGroupById(groupId) {
	// 	return this.axiosObject.get(this.apiBaseName + groupId)
	// }

}
