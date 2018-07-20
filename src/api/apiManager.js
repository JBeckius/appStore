import { Assets } from "./assets.js";
import { Authenticate } from "./authenticate.js";
import { Leaderboards } from "./leaderboards.js";
import { Token } from "./token.js";
import { Apps } from "./apps.js";
import { Groups } from './groups.js';
import { Subdirectories } from './subdirectories.js';
import { User } from './user.js';
import { Image } from './image.js';
import { Executables } from './executables.js';
import { Clients } from './clients.js';

class apiManager {

	constructor() {

		//BASE_API_URL is a webpack variable defined per enviornment for the API path
		//webpack.dev.conf.js, webpack.qa.conf.js, webpack.staging.conf.js, webpack.preprod.conf.js, webpack.prod.conf.js
		this.baseURLPath = process.env.VUE_APP_BASE_API_URL;
		this.baseCDNPath = process.env.VUE_APP_BASE_CDN_URL;
		console.log(this.baseURLPath);

		//Authenticate object
		this.Authenticate = new Authenticate(this.baseURLPath);

		this.Token = new Token(this.baseURLPath);
		//CRUD based objects
		this.assets = new Assets(this.baseURLPath, this.baseCDNPath);
		this.leaderboards = new Leaderboards(this.baseURLPath);
		this.apps = new Apps(this.baseURLPath);
		this.groups = new Groups(this.baseURLPath);
		this.subdirectories = new Subdirectories(this.baseURLPath);
		this.user = new User(this.baseURLPath);
		this.image = new Image(this.baseURLPath);
		this.executables = new Executables(this.baseURLPath);
		this.clients = new Clients(this.baseURLPath);
	}

	setAccessDefault(userId) {
		this.Authenticate.setUserHeader(userId);
		this.assets.setUserHeader(userId);
		this.leaderboards.setUserHeader(userId);
	}

	setAuthDefault(token) {
		this.apps.setAuthorizationHeader(token);
		this.groups.setAuthorizationHeader(token);
		this.subdirectories.setAuthorizationHeader(token);
		this.user.setAuthorizationHeader(token);
		this.image.setAuthorizationHeader(token);
		this.executables.setAuthorizationHeader(token);
		this.clients.setAuthorizationHeader(token);
	}

	setAccessNational(nationalId) {
		this.Authenticate.setNationalUserHeader(nationalId);
		this.assets.setNationalUserHeader(nationalId);
		this.leaderboards.setNationalUserHeader(nationalId);
	}
}

export default new apiManager();
