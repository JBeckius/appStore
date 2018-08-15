import { baseAPI } from "./baseAPI.js";

export class User extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'user';
	}

	getUserRole() {
		return this.axiosObject.get(this.apiBaseName + '/auth');
	}

	getUserGroups() {
		return this.axiosObject.get(this.apiBaseName + '/groups');
	}

	getUsername() {
		return this.axiosObject.get(this.apiBaseName + '/username');
	}

	logout() {
		return this.axiosObject.post(this.apiBaseName + '/logout');
	}

	addGroup({username, groupId}={}) {
		let data = {
			username,
			groupId
		};
		return this.axiosObject.post(this.apiBaseName + '/group', data, {
			headers: {
				'Content-type': 'application/json'
			}
		});
	}

	removeGroup({username, groupId}) {
		let data = {
			username,
			groupId
		};
		return this.axiosObject.delete(this.apiBaseName + '/group', data, {
			headers: {
				'Content-type': 'application/json'
			}
		});
	}
}
