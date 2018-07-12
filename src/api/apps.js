import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Apps extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'app';
	}

}
