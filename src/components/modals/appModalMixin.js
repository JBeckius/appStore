import moment from 'moment'

export default {
	computed: {
		latestVersion() {
			let versions = this.appData.versions;
			return (versions && versions.length) > 0 ? versions[0].version : "No version #";
		},
		fileSize() {
			let versions = this.appData.versions;
			return (versions && versions.length) > 0 ? (versions[0].fileSize / 1000): "No file size";
		},
		lastUpdatedDate() {
			return moment(this.appData.lastUpdated).format("MM/DD/YYYY");
		}
	}
}
