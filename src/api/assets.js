import { baseAPI } from "./baseAPI.js";

export class Assets extends baseAPI {

	constructor(baseURLPath, baseCDNPath) {
		super(baseURLPath);
		this.baseURLForPathing = baseURLPath;
		this.apiBaseName = 'Assets';
		this.currentUploadId = '';
		this.baseCDNPath = baseCDNPath;
	}

	postAsset(blobData) {

		let formData = new FormData();
		formData.append("file", blobData);

		return this.axiosObject({
			method: 'post',
			url: this.apiBaseName + '/Image',
			data: formData,
			config: { headers: { 'Content-Type': 'multipart/form-data' } }
		});
	}
	
	getImageURL_API(guid) {
		return this.baseURLForPathing + this.apiBaseName + '/Image/' + guid;
	}

	getImageURL_CDN(guidWithFileExtension) {
		return this.baseCDNPath + 'images/' + guidWithFileExtension; 
	}

	getImageURL_CDN_JPG(guid) {
		return this.baseCDNPath + 'images/' + guid + '.jpg'; 
	}

	getImageURL_CDN_PNG(guid) {
		return this.baseCDNPath + 'images/' + guid + '.png';
	}

	getImageSized(guid, width, height) {
		return this.axiosObject.get(this.apiBaseName + '/Image/' + guid + '?width=' + width + '&height=' + height);
	}

	getVideoURL_CDN(guidWithFileExtension) {
		return this.baseCDNPath + 'videos/' + guidWithFileExtension;
	}

	getVideo() {
		return this.axiosObject.get(this.apiBaseName + '/Video');
	}

	getVideobyModule(guidModule) {
		return this.axiosObject.get(this.apiBaseName + '/Video/' + guidModule);
	}
}