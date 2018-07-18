import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Groups extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'group';
	}

}
