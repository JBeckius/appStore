import { baseAPI } from "./baseAPI.js";

export class Image extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'image';
	}

	upload(file) {
		let formData = new FormData();
		formData.append('file', file);

		return this.axiosObject.post(this.apiBaseName, formData,
			// {
			// 	mimeType : "multipart/form-data",
			// 	contentType: false,
			// 	processData : false,
			// 	headers: {
			// 		'Content-type': 'multipart/form-data'
			// 	}
			// }
		)
	}
}
