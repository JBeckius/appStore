import { Assets } from "./assets.js";
import { Authenticate } from "./authenticate.js";
import { Leaderboards } from "./leaderboards.js";

class apiManager {

	constructor() {

		//BASE_API_URL is a webpack variable defined per enviornment for the API path
		//webpack.dev.conf.js, webpack.qa.conf.js, webpack.staging.conf.js, webpack.preprod.conf.js, webpack.prod.conf.js
		this.baseURLPath = process.env.VUE_APP_BASE_API_URL;
		this.baseCDNPath = process.env.VUE_APP_BASE_CDN_URL;
		console.log(this.baseURLPath);

		//Authenticate object
		this.Authenticate = new Authenticate(this.baseURLPath);

		//CRUD based objects
		this.assets = new Assets(this.baseURLPath, this.baseCDNPath);
		this.leaderboards = new Leaderboards(this.baseURLPath);
	}

	setAccessDefault(userId) {
		this.Authenticate.setUserHeader(userId);
		this.assets.setUserHeader(userId);
		this.leaderboards.setUserHeader(userId);
	}

	setAccessNational(nationalId) {
		this.Authenticate.setNationalUserHeader(nationalId);
		this.assets.setNationalUserHeader(nationalId);
		this.leaderboards.setNationalUserHeader(nationalId);
	}
}

export default new apiManager();
