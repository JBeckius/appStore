import { baseCRUDAPI } from "./baseCRUDAPI.js";

export class Apps extends baseCRUDAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'app';
	}
	upload(app) {
		let json = JSON.stringify(app);
		return this.axiosObject.post(this.apiBaseName, json, {
			headers: {
				'Content-type': 'application/json'
			}
		})
	}
	update(app, updates) {
		let appData = {
			applicationName : app.applicationName,
			applicationId: app.applicationId,
			description : app.description,
			//subdirectory: app.subdirectory,
			//bundleId : app.bundleId,
			//dateStart : app.dateStart,
			//dateEnd : app.dateEnd,
			visible : app.visible ? true : false,
			downloadEnabled :  true,
			imageId : app.image.id,
			groupIds : [app.subdirectory.id],
			//clientId : app.clientId,
			//clientAdIds: app.clientAdIds,
			versionIds: []
		};
		let updatedApp = Object.assign(appData, updates);
		let json = JSON.stringify(updatedApp);
		console.log('updatedApp: ', updatedApp);
		return this.axiosObject.put(this.apiBaseName, json, {
			headers: {
				'Content-type': 'application/json'
			}
		});
	}
	addADGroup(appId, adName) {
		let data = {
			applicationId: appId,
			adName
		};
		return this.axiosObject.post(this.apiBaseName + '/AD', data);
	}
}
