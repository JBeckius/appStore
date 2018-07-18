import { baseCRUDAPI } from './baseCRUDAPI.js';

export class Executables extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'executable';
	}
	upload(file) {
		let formData = new FormData();
		formData.append('', file);
		formData.append('downloadEnabled', "0");

		return this.axiosObject.post(this.apiBaseName, formData);
	}

}
