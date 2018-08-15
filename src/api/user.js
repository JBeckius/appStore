import { baseAPI } from "./baseAPI.js";

export class User extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'user';
	}

	getUserRole() {
		return this.axiosObject.get(this.apiBaseName + '/auth');
	}

	getUserGroups(username) {
		return this.axiosObject.get(this.apiBaseName + '/groups?sUsername=' + username);
	}

	getUsername() {
		return this.axiosObject.get(this.apiBaseName + '/username');
	}

	logout() {
		return this.axiosObject.post(this.apiBaseName + '/logout');
	}

	addGroup({username, groupId}={}) {
		return this.axiosObject.post(this.apiBaseName + '/group', {username, groupId}, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}

	removeGroup({username, groupId}={}) {
		return this.axiosObject({method: 'delete', url: this.apiBaseName + '/group', data:{username, groupId},
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
