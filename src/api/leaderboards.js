import { baseAPI } from "./baseAPI.js";

export class Leaderboards extends baseAPI {

	constructor(baseURLPath) {
		super(baseURLPath);
		this.apiBaseName = 'Leaderboards';
	}

	//START---COMBINED BASED LEADERBOARD METHODS---START
	//getCombinedBoard_* methods are used for the leaderboard from the portal screen
	getCombinedBoard() {
		return this.axiosObject.get(this.apiBaseName);
	}

	getCombinedBoard_ByZoneThenDistrict(zoneId, districtId) {
		return this.axiosObject.get(this.apiBaseName + '/Zone/' + zoneId + '/District/' + districtId);
	}

	getCombinedBoard_ByDealerCode(dealerCode) {
		return this.axiosObject.get(this.apiBaseName + '/Dealer/' + dealerCode);
	}

	//rankObject --> { userId: guid, dealerCode: string }
	getCombinedBoard_Rank(rankObject) {
		rankObject = { params: rankObject };
		return this.axiosObject.get(this.apiBaseName + '/Rank', rankObject);
	}

	//rankObject --> { userId: guid, dealerCode: string }
	getCombinedBoard_Rank_ByZoneThenDistrict(zoneId, districtId, rankObject) {
		rankObject = { params: rankObject };
		return this.axiosObject.get(this.apiBaseName + '/Zone/' + zoneId + '/District/' + districtId +  '/Rank', rankObject);
	}

	//rankObject --> { userId: guid, dealerCode: string }
	getCombinedBoard_Rank_ByDealerCode(dealerCode, rankObject) {
		rankObject = { params: rankObject };
		return this.axiosObject.get(this.apiBaseName + '/Dealer/' + dealerCode + '/Rank', rankObject);
	}
	//END-----COMBINED BASED LEADERBOARD METHODS-----END



	
	//START---PROJECT BASED LEADERBOARD METHODS---START
	//getProjectBoard_* methods are used for the leaderboard from within a project
	getProjectBoard(projectId) {
		return this.axiosObject.get(this.apiBaseName + '/Project/' + projectId);
	}

	getProjectBoard_ByZoneThenDistrict(projectId, zoneId, districtId) {
		return this.axiosObject.get(this.apiBaseName + '/Project/' + projectId + '/Zone/' + zoneId + '/District/' + districtId);
	}

	getProjectBoard_ByDealerCode(projectId, dealerCode) {
		return this.axiosObject.get(this.apiBaseName + '/Project/' + projectId + '/Dealer/' + dealerCode);
	}

	//rankObject --> { userId: guid, dealerCode: string }
	getProjectBoard_Rank(projectId, rankObject) {
		rankObject = { params: rankObject };
		return this.axiosObject.get(this.apiBaseName + '/Project/' + projectId + '/Rank', rankObject);
	}

	//rankObject --> { userId: guid, dealerCode: string }
	getProjectBoard_Rank_ByZoneThenDistrict(projectId, zoneId, districtId, rankObject) {
		rankObject = { params: rankObject };
		return this.axiosObject.get(this.apiBaseName + '/Project/' + projectId + '/Zone/' + zoneId + '/District/' + districtId + '/Rank', rankObject);
	}

	//rankObject --> { userId: guid, dealerCode: string }
	getProjectBoard_Rank_ByDealerCode(projectId, dealerCode, rankObject) {
		rankObject = { params: rankObject };
		return this.axiosObject.get(this.apiBaseName + '/Project/' + projectId + '/Dealer/' + dealerCode + '/Rank', rankObject);
	}
	//END-----PROJECT BASED LEADERBOARD METHODS-----END
}