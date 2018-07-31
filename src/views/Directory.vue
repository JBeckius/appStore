<template>
	<div id="directory">
		<div class="tab-content" id="directoryTabs">
			<div class="tab-pane fade show active" id="directoryTab">
				<div class="row mt-3">
					<div class="col">
						<form id="appSearchForm">
							<div class="input-group mb-3">
								<input v-model="searchText" type="text" class="form-control" name="query" id="query"
								       placeholder="Search by app name or subdirectory">
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" type="submit">Search</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="row appsDirectory">
					<AppNode v-for="(app, index) in filteredApps" :appData="app" :selectApp="selectApp" :index="index"/>
					<!-- {{#if apps}}
						{{#each apps as |app|}}
							{{> app}}
						{{/each}}
					{{/if}} -->
				</div>
			</div>
		</div>
		<SettingsModal v-if="showSettings" :appData="currentApp" :close="deselectApp" :showVersions="toggleVersionsModal"/>
		<VersionHistoryModal v-if="showVersions" :appData="currentApp" :close="toggleVersionsModal"/>
	</div>
</template>

<script>
import apiManager from '../api/apiManager.js';
import AppNode from '../components/appNode.vue';
import SettingsModal from '../components/modals/settingsModal.vue';
import VersionHistoryModal from '../components/modals/versionHistoryModal.vue';

export default {
	name: 'directory',
	components: {AppNode, SettingsModal, VersionHistoryModal},
	data() {
		return {
			selectedAppInd: -1,
			showVersions: false,
			searchText: ""
		}
	},
	computed: {
		apps() {
			return this.$store.state.apps;
		},
		currentApp() {
			return this.apps[this.selectedAppInd];
		},
		showSettings() {
			return this.selectedAppInd >= 0 ? true : false;
		},
		filteredApps() {
			//TODO only filters by app name and description
			if(this.searchText === "") return this.apps;
			let searchText = this.searchText.toLowerCase();
			return this.apps.filter(app => {
				return app.applicationName.toLowerCase().includes(searchText) ? true :
							 app.subdirectory && app.subdirectory.name.toLowerCase().includes(searchText) ? true :
							 																					 false;
			});
		}
	},
	methods: {
		getApps() {
			//
			console.log('getting apps');
			return
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
		toggleVersionsModal() {
			this.showVersions = !this.showVersions;
			// test2
		}
	},
	beforeMount() {
		//this.apps = this.getApps();
	}
}
</script>

<style scoped>

</style>
