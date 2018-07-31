<template>
	<div class="tab-pane" id="uploadAppTab">
		<form enctype="multipart/form-data" @submit="checkForm" id="uploadAppForm" method="post">
			<div class="card">
				<h5 class="card-header">Application Details</h5>
				<div class="card-body">
					<div class="form-row">
						<div class="form-group col-md-3">
							<select v-model="relatedApp" class="form-control" id="relatedApps" name="relatedApps">
								<option :value="null" selected="selected">Related Application</option>
								<option v-if="apps" v-for="app in apps" :value="app">{{app.applicationName}}</option>
							</select>
						</div>
						<div class="form-group col-md-6">
							<input v-model="applicationName" type="text" class="form-control" id="name" name="name"
										 placeholder="Application Name" required>
							<div class="invalid-feedback">
								Please enter a name.
							</div>
						</div>
						<div class="form-group col-md-3">
							<input v-model="applicationVersion" type="text" class="form-control" id="version" name="version"
										 placeholder="Application Version" required>
							<div class="invalid-feedback">
								Please enter a version.
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-4">
							<select v-model="subdirectory" class="form-control" id="subdirectory" name="subdirectory" required>
								<option :value="null" selected="selected">Subdirectory</option>
								<option v-if="subdirectories" v-for="subdirectory in subdirectories" :value="subdirectory.id">{{subdirectory.name}}</option>
							</select>
						</div>
						<div class="form-group col-md-8">
							<input v-model="description" type="text" class="form-control" id="description" name="description"
										 placeholder="Application Description" required>
							<div class="invalid-feedback">
								Please enter a description.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<h5 class="card-header">Application Files</h5>
				<div class="card-body">
					<div class="form-row">
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<!-- <input v-model="appIcon" type="text" class="form-control" id="appIcon" name="appIcon"
											 placeholder="Upload Application Icon"> -->
								<FileUpload :fileType="fileTypes.img" name="appIconFile" :upload="uploadImg()"/>
								<div class="input-group-append">
									<!-- <button class="btn btn-outline-secondary" name="appIconFileBtn"
													id="appIconFileBtn"
													type="button">Upload
									</button> -->
								</div>
							</div>
						</div>
						<div class="form-group col-md-6">
							<input v-model="bundleId" type="text" class="form-control" id="bundleId" name="bundleId"
										 placeholder="Bundle Id" required>
						</div>
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<!-- <input v-model="ipaFileName" type="text" class="form-control" id="ipaFileName" name="ipaFileName"
											 placeholder="Enterprise Distribution File(.IPA)"> -->

								<FileUpload :fileType="fileTypes.ipa" name="ipaFile" :upload="loadIpa"/>

								<div class="input-group-append">
									<!-- <button class="btn btn-outline-secondary" name="ipaFileBtn" id="ipaFileBtn"
													type="button">Upload
									</button> -->
								</div>
							</div>
						</div>
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<!-- <input v-model="apkFileName" type="text" class="form-control" name="apkFileName" id="apkFileName"
											 placeholder="Android File(.APk)"> -->
								<FileUpload :fileType="fileTypes.apk" name="apkFile" :upload="loadApk"
								/>
								<div class="input-group-append">
									<!-- <button class="btn btn-outline-secondary" name="apkFileBtn" id="apkFileBtn"
													type="button">Upload
									</button> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<h5 class="card-header">Security Settings</h5>
				<div class="card-body">
					<div class="form-row">
						<Dropdown v-model="clientId" :options="clients" optionValue="id" optionDisplay="clientName" placeholder="Select a Client" name="clients"/>
						<div class="form-group col-md-4 my-1">
							<DatePicker class="datePicker form-control" v-model="dateStart" placeholder="Start Date" typeable/>
						</div>
						<div class="form-group col-md-4 my-1">
							<DatePicker class="datePicker form-control" v-model="dateEnd" placeholder="End Date" typeable/>
						</div>
					</div>
					<div class="form-row align-items-center">
						<Checkbox v-model="disablePreviousVersion" name="disablePreviousVersion" label="Disable Previous Version" />
						<Checkbox v-model="visible" name="visible" label="Visible Within Directory" :checked="visible"/>
					</div>
				</div>
			</div>
			<!-- <SecuritySettings :update="updateSecurity"/> -->
			<button v-on:click="" class="btn btn-primary btn-center mt-3"  id="uploadAppBtn" type="submit">Upload</button>
		</form>
		<div class="uploadAppMessage"></div>
	</div>
</template>

<script>
	import moment from 'moment';
	import FileUpload from '../components/fileUpload.vue';
	import DatePicker from 'vuejs-datepicker';
	import Checkbox from '../components/inputs/checkbox.vue';
	import Dropdown from '../components/inputs/dropdown.vue';
	import apiManager from '../api/apiManager.js';

	export default {
		name: 'uploadApp',
		components: {
			FileUpload,
			DatePicker,
			Checkbox,
			Dropdown
		},
		data() {
			return {
				disablePreviousVersion: false,
				subdirectory: null,
				applicationVersion: null,
				relatedApp: null,
				applicationName: null,
				description: null,
				bundleId: null,
				dateStart: null,
				dateEnd: null,
				visible: true,
				downloadEnabled: null,
				versionIds: [],
				imageId: null,
				groupIds: null,
				clientId: null,
				applicationId: null,
				clientId: null,
				clientAdIds: null,
				appUploaded: null,
				apkFileName: null,
				apkFile: null,
				ipaFileName: null,
				ipaFile: null,
				appIcon: null,
				fileTypes: {
					img: 'image/*',
					apk: '.APk',
					ipa: '.IPA'
				}
			}
		},
		methods: {
			loadIpa(name, file) {
				console.log('uploading ipa: ', name, file);
				this.ipaFile = file;
				return Promise.resolve(file);
				//apiManager.executables.upload(file);
			},
			loadApk(name, file) {
				console.log('loading apk: ', name, file);
				this.apkFile = file;
				return Promise.resolve(file);
			},
			uploadExe(opts) {
				console.log('uploading apk: ', name, file);
				return apiManager.executables.upload(opts);
			},
			uploadImg() {
				let _this = this;
				return (name, file) => {
					console.log('uploading img: ', name, file);
					_this.imageId = null;
					return apiManager.image.upload(file)
					.then(resp => {
						console.log('uploaded that image: ', resp);
						_this.imageId = resp.data.id;
						return resp.data.id;
					})
					.catch(err=> console.log(err));
				}
			},
			uploadApp() {
				let exeFiles = [this.apkFile, this.ipaFile];
				let loadedExes = exeFiles.filter(file => file ? true : false);
				let uploadExeProms = loadedExes.map(file => {
					let opts = {
						file,
						name: this.applicationName,
						applicationVersion: this.applicationVersion,
						dateStart: this.dateStartISO,
						dateEnd: this.dateEndISO,
						bundleId: this.bundleId,
						downloadEnabled: true
					};
					return apiManager.executables.upload(opts);
				});
				Promise.all(uploadExeProms)
					.then(resps => {
						let versionIds = resps.map(resp => resp.data.id);

						let opts = Object.assign({
							applicationName : this.applicationName,
							description : this.description,
							bundleId : this.bundleId || this.name,
							dateStart : this.dateStartISO,
							dateEnd : this.dateEndISO,
							visible : this.visible ? true : false,
							downloadEnabled :  true,
							imageId : this.imageId,
							groupIds : [this.subdirectory],
							clientId : this.clientId
						}, (this.relatedApp) ? {
							applicationId : this.applicationId,
							clientId :this.clientId,
							clientAdIds : this.clients.find(client=> client.id === this.clientId)
						} : null)
						if(versionIds.length > 0) opts.versionIds = versionIds;

						if(this.applicationId) return apiManager.apps.update(this.relatedApp, opts);
						else return apiManager.apps.upload(opts);
					})
					.then(resp => this.$router.push('/'));


			},
			updateDetails({ applicationName, applicati}) {
				this
			},
			updateFiles() {

			},
			updateSecurity(securityForm) {
				this.disablePreviousVersion = securityForm.disablePreviousVersion;
				this.dateStart = securityForm.dateStart;
				this.dateEnd = securityForm.dateEnd;
				this.visible = securityForm.visible;
				this.clientId = securityForm.clientId;
			},
			checkForm(e) {
				e.preventDefault();
				if(
					this.applicationName &&
					this.description &&
					this.bundleId &&
					this.dateStart &&
					this.dateEnd &&
					this.visible &&
					this.subdirectory &&
					this.clientId &&
					(this.ipaFile || this.apkFile)
				) console.log('app validated'); return this.uploadApp();


			}
		},
		computed: {
			apps() {
				return this.$store.state.apps;
			},
			subdirectories() {
				return this.$store.state.subdirectories;
			},
			clients() {
				return this.$store.state.clients;
			},
			dateStartISO() {
				return this.dateStart ? moment(this.dateStart).toISOString() : ""
			},
			dateEndISO() {
				return this.dateEnd ? moment(this.dateEnd).toISOString() : ""
			}
		},
		watch: {
			relatedApp() {
				let app = this.relatedApp;
				this.subdirectory = app.subdirectory && app.subdirectory.id ? app.subdirectory.id : null;
				this.applicationVersion = app.versions[0].version || null;
				this.applicationName = app.applicationName || null;
				this.description = app.description || null;
				this.bundleId = app.bundleId || null;
				this.dateStart = app.dateStart || null;
				this.dateEnd = app.dateEnd || null;
				this.visible = app.visible || true;
				this.downloadEnabled = app.downloadEnabled || true;
				this.versionIds = app.versions.map(version=>version.id) || [];
				this.imageId = app.image.id || null;
				this.groupIds = app.groupIds || null;
				this.applicationId = app.applicationId || null;
				this.clientId = app.clientADs.id || null;
				// this.clientAdIds = app.clientADs.map(client => client.adName) || null;

			}
		}
	}
</script>

<style scoped>

</style>
