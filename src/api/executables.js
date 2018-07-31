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

	download(exeId) {
		return this.axiosObject.get(this.apiBaseName + '/download/apk/'+ exeId, {exeId}, {
			headers: {
				'contentType': 'application/json'
			}
		})
			.then(resp => {
				console.log(resp);
				const blob = this.b64toBlob(resp.data, resp.headers['content-type']);
				const blobUrl = URL.createObjectURL(blob);
				let a = document.createElement('a');
				a.href = blobUrl;
				a.download = resp.headers['x-filename'];
				a.click();
				window.URL.revokeObjectURL(blobUrl);

			})
	}

	b64toBlob(b64Data, contentType = '', sliceSize = 512) {
	const byteCharacters = atob(b64Data);
	const byteArrays = [];
	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);
		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}
	return new Blob(byteArrays, {
		type: contentType
	});

}

}
