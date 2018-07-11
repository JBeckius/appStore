<template>
	<div id="directory">
		<div class="tab-content" id="directoryTabs">
			<div class="tab-pane fade show active" id="directoryTab">
				<div class="row mt-3">
					<div class="col">
						<form id="appSearchForm">
							<div class="input-group mb-3">
								<input type="text" class="form-control" name="query" id="query"
								       placeholder="Search by app name or subdirectory">
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" type="submit">Search</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="row appsDirectory">
					<AppNode v-for="(app, index) in apps" :appData="app" :selectApp="selectApp" :index="index"/>
					<!-- {{#if apps}}
						{{#each apps as |app|}}
							{{> app}}
						{{/each}}
					{{/if}} -->
				</div>
			</div>
		</div>
		<SettingsModal v-if="showSettings" :appData="currentApp" :close="deselectApp" :showVersions="toggleVersionsModal"/>
		<VersionHistoryModal v-if="showVersions" :appData="currentApp" />
	</div>
</template>

<script>
import apiManager from '../api/apiManager.js';
import AppNode from '../components/app.vue';
import SettingsModal from '../components/modals/settingsModal.vue';
export default {
	name: 'directory',
	components: {AppNode, SettingsModal},
	data() {
		return {
			apps: [],
			selectedAppInd: -1,
			showVersions: false
		}
	},
	computed: {
		currentApp() {
			return this.apps[this.selectedAppInd];
		},
		showSettings() {
			return this.selectedAppInd >= 0 ? true : false;
		}
	},
	methods: {
		getApps() {
			//
			console.log('getting apps');
			return [
		    {
		      "applicationId": 12,
		      "applicationName": "App Name 1",
		      "bundleId": "Bundle Id 1",
		      "description": "This is an awesome app",
		      "subdirectory": {
		        "id": 0,
		        "type": 0
		      },
		      "dateStart": "2018-07-10T13:24:48.3363011-04:00",
		      "dateEnd": "2018-08-10T13:24:48.3363011-04:00",
		      "createTimestamp": "2017-07-10T13:24:48.3363011-04:00",
		      "lastUpdated": "2018-01-10T13:24:48.3363011-05:00",
		      "visible": true,
		      "downloadEnabled": true,
		      "image": {
		        "id": 1,
		        "name": "App 1 image",
		        "path": "/Path/image.png",
		        "dateUploaded": "2017-07-10T13:24:48.3363011-04:00",
		        "fileSize": 10,
		        "applicationId": 0
		      },
		      "versions": [
		        {
		          "id": 1,
		          "name": "Exe Name",
		          "path": "../path/to/file.ipa",
		          "version": "1",
		          "dateUploaded": "2018-07-10T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID",
		          "fileSize": 1024,
		          "downloadEnabled": 1,
		          "applicationId": 7734
		        },
		        {
		          "id": 2,
		          "name": "Exe Name 2",
		          "path": "../path/to/file.apk",
		          "version": "2",
		          "dateUploaded": "2018-06-10T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID 2",
		          "fileSize": 2048,
		          "downloadEnabled": 0,
		          "applicationId": 5532
		        },
		        {
		          "id": 2,
		          "name": "Exe Name 3",
		          "path": "../path/to/file1.ipa",
		          "version": "5",
		          "dateUploaded": "2018-06-28T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID 3",
		          "fileSize": 1,
		          "downloadEnabled": 1,
		          "applicationId": 96
		        }
		      ],
		      "versionIds": [],
		      "groups": [
		        {
		          "id": 1,
		          "name": "Admin",
		          "type": 1,
		          "dateCreated": "2017-07-10T13:24:48.3363011-04:00"
		        },
		        {
		          "id": 2,
		          "name": "User",
		          "type": 2,
		          "dateCreated": "2018-01-10T13:24:48.3363011-05:00"
		        }
		      ],
		      "groupIds": []
		    },
		    {
		      "applicationId": 13,
		      "applicationName": "App Name 2",
		      "bundleId": "Bundle Id 2",
		      "description": "This is an awesome app",
		      "subdirectory": {
		        "id": 0,
		        "type": 0
		      },
		      "dateStart": "2018-07-10T13:24:48.3363011-04:00",
		      "dateEnd": "2018-08-10T13:24:48.3363011-04:00",
		      "createTimestamp": "2017-07-10T13:24:48.3363011-04:00",
		      "lastUpdated": "2018-01-10T13:24:48.3363011-05:00",
		      "visible": true,
		      "downloadEnabled": true,
		      "image": {
		        "id": 1,
		        "name": "App 2 image",
		        "path": "/Path/image.png",
		        "dateUploaded": "2017-07-10T13:24:48.3363011-04:00",
		        "fileSize": 10,
		        "applicationId": 0
		      },
		      "versions": [
		        {
		          "id": 1,
		          "name": "Exe Name",
		          "path": "../path/to/file.ipa",
		          "version": "1",
		          "dateUploaded": "2018-07-10T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID",
		          "fileSize": 1024,
		          "downloadEnabled": 1,
		          "applicationId": 7734
		        },
		        {
		          "id": 2,
		          "name": "Exe Name 2",
		          "path": "../path/to/file.apk",
		          "version": "2",
		          "dateUploaded": "2018-06-10T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID 2",
		          "fileSize": 2048,
		          "downloadEnabled": 0,
		          "applicationId": 5532
		        },
		        {
		          "id": 2,
		          "name": "Exe Name 3",
		          "path": "../path/to/file1.ipa",
		          "version": "5",
		          "dateUploaded": "2018-06-28T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID 3",
		          "fileSize": 1,
		          "downloadEnabled": 1,
		          "applicationId": 96
		        }
		      ],
		      "versionIds": [],
		      "groups": [
		        {
		          "id": 1,
		          "name": "Admin",
		          "type": 1,
		          "dateCreated": "2017-07-10T13:24:48.3363011-04:00"
		        },
		        {
		          "id": 2,
		          "name": "User",
		          "type": 2,
		          "dateCreated": "2018-01-10T13:24:48.3363011-05:00"
		        }
		      ],
		      "groupIds": []
		    },
		    {
		      "applicationId": 14,
		      "applicationName": "App Name 3",
		      "bundleId": "Bundle Id 3",
		      "description": "This is an awesome app",
		      "subdirectory": {
		        "id": 0,
		        "type": 0
		      },
		      "dateStart": "2018-08-10T13:24:48.3363011-04:00",
		      "dateEnd": "2018-09-10T13:24:48.3363011-04:00",
		      "createTimestamp": "2017-07-10T13:24:48.3363011-04:00",
		      "lastUpdated": "2018-01-10T13:24:48.3363011-05:00",
		      "visible": true,
		      "downloadEnabled": true,
		      "image": {
		        "id": 1,
		        "name": "App 3 image",
		        "path": "/Path/image.png",
		        "dateUploaded": "2017-07-10T13:24:48.3363011-04:00",
		        "fileSize": 10,
		        "applicationId": 0
		      },
		      "versions": [
		        {
		          "id": 1,
		          "name": "Exe Name",
		          "path": "../path/to/file.ipa",
		          "version": "1",
		          "dateUploaded": "2018-07-10T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID",
		          "fileSize": 1024,
		          "downloadEnabled": 1,
		          "applicationId": 7734
		        },
		        {
		          "id": 2,
		          "name": "Exe Name 2",
		          "path": "../path/to/file.apk",
		          "version": "2",
		          "dateUploaded": "2018-06-10T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID 2",
		          "fileSize": 2048,
		          "downloadEnabled": 0,
		          "applicationId": 5532
		        },
		        {
		          "id": 2,
		          "name": "Exe Name 3",
		          "path": "../path/to/file1.ipa",
		          "version": "5",
		          "dateUploaded": "2018-06-28T13:24:48.3363011-04:00",
		          "bundleId": "Bundle ID 3",
		          "fileSize": 1,
		          "downloadEnabled": 1,
		          "applicationId": 96
		        }
		      ],
		      "versionIds": [],
		      "groups": [
		        {
		          "id": 1,
		          "name": "Admin",
		          "type": 1,
		          "dateCreated": "2017-07-10T13:24:48.3363011-04:00"
		        },
		        {
		          "id": 2,
		          "name": "User",
		          "type": 2,
		          "dateCreated": "2018-01-10T13:24:48.3363011-05:00"
		        }
		      ],
		      "groupIds": []
		    }
  		];
		},
		selectApp(index) {
			console.log('selecting app: ', index, this.selectedAppInd);
			this.selectedAppInd = index;
			console.log('selectedApp: ', this.selectedAppInd, this);
		},
		deselectApp() {
			console.log('deselecting app');
			this.selectedAppInd = -1;
		},
		}
	},
	beforeMount() {
		this.apps = this.getApps();
	}
}
</script>

<style scoped>

</style>
