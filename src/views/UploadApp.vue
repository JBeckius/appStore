<template>
	<div class="tab-pane" id="uploadAppTab">
		<form enctype="multipart/form-data" id="uploadAppForm" method="post" novalidate>
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
							<select v-model="subdirectory" class="form-control" id="subdirectory" name="subdirectory">
								<option value="" selected="selected">Subdirectory</option>
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
								<input v-model="appIcon" type="text" class="form-control" id="appIcon" name="appIcon"
											 placeholder="Upload Application Icon">
								<FileUpload :fileType="fileTypes.img"
														name="appIconFile"
														:upload="uploadImg"
								/>
								<!-- <input v-on:change="" type="file" accept="image/*" class="d-none" id="appIconFile"
											 name="appIconFile"/> -->
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" name="appIconFileBtn"
													id="appIconFileBtn"
													type="button">Upload
									</button>
								</div>
							</div>
						</div>
						<div class="form-group col-md-6">
							<input v-model="bundleId" type="text" class="form-control" id="bundleId" name="bundleId"
										 placeholder="Bundle Name">
						</div>
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<input v-model="ipaFileName" type="text" class="form-control" id="ipaFileName" name="ipaFileName"
											 placeholder="Enterprise Distribution File(.IPA)">

								<FileUpload :fileType="fileTypes.ipa"
														name="ipaFile"
														:upload="uploadIpa"
								/>
								<!-- <input v-on:change="fileChange($event.target.name, $event.target.file)" type="file" class="d-none" id="ipaFile" :disabled="isSaving" name="ipaFile"/> -->

								<div class="input-group-append">
									<button class="btn btn-outline-secondary" name="ipaFileBtn" id="ipaFileBtn"
													type="button">Upload
									</button>
								</div>
							</div>
						</div>
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<input v-model="apkFileName" type="text" class="form-control" name="apkFileName" id="apkFileName"
											 placeholder="Android File(.APk)">
								<FileUpload :fileType="fileTypes.apk"
														name="apkFile"
														:upload="uploadApk"
								/>
								<!-- <input v-on:change="" type="file" class="d-none" id="apkFile" name="apkFile"/> -->
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" name="apkFileBtn" id="apkFileBtn"
													type="button">Upload
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SecuritySettings :update="updateSecurity"/>
			<button class="btn btn-primary btn-center mt-3"  id="uploadAppBtn" type="button">Upload</button>
		</form>
		<div class="uploadAppMessage"></div>
	</div>
</template>

<script>
	import ApplicationDetails from '../components/applicationDetails.vue'
	import ApplicationFiles from '../components/applicationFiles.vue'
	import SecuritySettings from '../components/securitySettings.vue'
	import FileUpload from '../components/fileUpload.vue';
	import Datepicker from 'vuejs-datepicker';
	import apiManager from '../api/apiManager.js';

	export default {
		name: 'uploadApp',
		components: {
			ApplicationDetails,
			ApplicationFiles,
			SecuritySettings,
			FileUpload
		},
		data() {
			return {
				subdirectory: null,
				applicationVersion: null,
				relatedApp: null,
				applicationName: null,
				description: null,
				bundleId: null,
				dateStart: null,
				dateEnd: null,
				visible: null,
				downloadEnabled: null,
				versionIds: null,
				imageId: null,
				groupIds: null,
				clientId: null,
				applicationId: null,
				clientId: null,
				clientAdIds: null,
				appUploaded: null,
				apkFileName: null,
				ipaFileName: null,
				appIcon: null,
				fileTypes: {
					img: 'image/*',
					apk: '.APk',
					ipa: '.IPA'
				}
			}
		},
		methods: {
			uploadIpa(name, file) {
				console.log('uploading ipa: ', name, file);
				apiManager.executables.upload(file);
			},
			uploadApk(name, file) {
				console.log('uploading apk: ', name, file);
				apiManager.executables.upload(file);
			},
			uploadImg(name, file) {
				console.log('uploading img: ', name, file);
				this.imageID = null;
				apiManager.image.upload(file)
				.then(resp => {
					console.log('uploaded that image: ', resp);
					this.imageId = resp.data.Id;
				})
				.catch(err=> console.log(err));
			},
			uploadApp() {
				let json = JSON.stringify(Object.assign({
					applicationName : this.applicationName,
					description : this.description,
					bundleId : this.bundleId || this.name,
					dateStart : this.dateStart ? moment(this.dateStart).toISOString() : "",
					dateEnd : this.dateEnd ? moment(this.dateEnd).toISOString() : "" ,
					visible : this.visible ? true : false,
					downloadEnabled :  true,
					versionIds : versionIds,
					imageId : this.imageId,
					groupIds : [this.subdirectory],
					clientId : this.clientId
				}, (this.relatedApp) ? {
					applicationID : this.applicationId,
					clientId : $('#curcli').text(),
					clientAdIds : formData.get('clients')
				} : null))

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
			}
		},
		computed: {
			apps() {
				return this.$store.state.apps;
			},
			subdirectories() {
				return this.$store.state.subdirectories;
			}
		},
		watch: {
			relatedApp() {
				this.subdirectory = this.relatedApp.subdirectory;
				this.applicationVersion = this.relatedApp.versions[0];
				this.applicationName = this.relatedApp.applicationName;
				this.description = this.relatedApp.description;
				this.bundleId = this.relatedApp.bundleId;
				this.dateStart = this.relatedApp.dateStart;
				this.dateEnd = this.relatedApp.dateEnd;
				this.visible = this.relatedApp.visible;
				this.downloadEnabled = this.relatedApp.downloadEnabled;
				this.versionIds = this.relatedApp.versionIds;
				this.imageId = this.relatedApp.image.id;
				this.groupIds = this.relatedApp.groupIds;
				this.applicationId = this.relatedApp.applicationId;
				this.clientId = this.relatedApp.clientId;
				this.clientAdIds = this.relatedApp.clientAds;

			}
		}
	}
</script>

<style scoped>

</style>
