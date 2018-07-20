import { baseCRUDAPI } from './baseCRUDAPI.js';

export class Executables extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'executable';
	}
	upload({file, name, applicationVersion, dateStart, dateEnd, bundleId, downloadEnabled}={}) {
		let formData = new FormData();
		formData.append('file', file);
		formData.append('downloadEnabled', downloadEnabled ? 1 : 0);
		formData.append('name', name);
		formData.append('version', applicationVersion);
		formData.append('dateStart', dateStart);
		formData.append('dateEnd', dateEnd);
		formData.append('bundleId', bundleId);

		console.log('exe form: ', formData);

		return this.axiosObject.post(this.apiBaseName, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Accept': 'application/json'
			}
		});
	}

}
