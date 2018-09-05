<template>
	<div class="col-sm-6">
		<div class="card">
			<div class="row">
				<div class="col-sm-4">
					<img class="img-thumbnail w-100 h-100 fitImage"
					     :src="imgPath"/>
				</div>
				<div class="card-body col-sm-8">
					<h5 class="card-title">{{appData.applicationName}}</h5>
					<!-- <p class="card-text">Version {{latestVersion version}}</p> -->
					<p class="card-text">{{'Version ' + currentVersion.version}}</p>
					<button class="btn btn-primary settingsBtn" :data-id="appData.applicationId" v-on:click="select()">
						Settings
					</button>
					<a v-if="iOS && appData.downloadEnabled" :href="href" class="btn btn-secondary active" :disabled="currentVersion">Download</a>
					<a v-if="!iOS && appData.downloadEnabled" v-on:click="downloadApp" class="btn btn-secondary active downloadBtn">Download</a>
					<p class="noApp" v-if="noApp">No download available for this device type</p>
				</div>
			</div>
		</div>
		<!-- <SettingsModal :appData="appData" /> -->
	</div>
</template>

<script>
import SettingsModal from './modals/settingsModal.vue';
import apiManager from '../api/apiManager.js';

export default {
	name: 'appNode',
	components: {SettingsModal},
	props: ['appData', 'selectApp', 'index'],
	data() {
		return {
			iOS: (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) || (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)),
			noApp: false
		}
	},
	methods: {
		select() {

				this.selectApp(this.index);
		},
		calcPath(path) {
			let baseURL = process.env.VUE_APP_BASE_CDN_URL;
			return baseURL + path;
		},
		downloadApp() {
			console.log('getting app: ', this.currentVersion.id);
			return apiManager.executables.download(this.currentVersion.id)
				.catch(err=> {
					console.log('err downloading app: ', err);
						this.noApp = true;
				});
		},
		exeType(path){
			return path === '' ? 'android' : 'ios';
		},
		compatibleWithDevice(version) {
			return (version.path === '' && !this.iOS) 		 ? true :
						 (version.path.length > 0 && this.iOS) ? true
						 																			 : false;
		}

	},
	computed: {
		href(){
			return this.iOS ? `itms-services://?action=download-manifest&url=${this.currentVersion.path}`
										  : this.currentVersion.path;
		},
		currentVersion() {
			if(!this.appData.versions[0]) return {downloadEnabled: 0, version: '1', path: ''};
			return this.appData.versions.filter(version=>this.compatibleWithDevice(version))
																	.find(version => version.downloadEnabled === 1) || { downloadEnabled: 0, version: this.appData.versions[0].version, path: this.appData.versions[0].path};
		},
		imgPath() {
			let baseURL = process.env.VUE_APP_BASE_CDN_URL;
			return baseURL + this.appData.image.path.substring(1);
		}
	}
}
</script>

<style scoped>
	img {
			object-fit: contain;
			border-radius: 15%;
			max-height:150px;
			/* margin-top: 5px; */
	}
	.img-thumbnail {
		border: 0px;
	}
	.card {
		height: 100%;
	}
	.row {
		padding: 5px 0;
		height: 100%;
	}
	.noApp {
		color: red;
		margin: 0;
		padding: 0;
	}
</style>
