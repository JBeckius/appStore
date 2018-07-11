import { baseAPI } from "./baseAPI.js";

export class baseCRUDAPI extends baseAPI {
	
	constructor(baseURLPath) {
		super(baseURLPath);

		this.objectSingle;
		this.objectList;
	}

	getAll() {
		return this.axiosObject.get(this.apiBaseName + '?unique=' + Math.round(+new Date() / 1000));
	}

	get(guid) {
		return this.axiosObject.get(this.apiBaseName + '/' + guid + '?unique=' + Math.round(+new Date() / 1000));
	}

	post(objectData) {
		return this.axiosObject.post(this.apiBaseName, objectData);
	}

	put(guid, objectData) {
		return this.axiosObject.put(this.apiBaseName + '/' + guid, objectData);
	}

	delete(guid) {
		return this.axiosObject.get(this.apiBaseName + '/' + guid);
	}
}