<template>
	<div class="col-sm-6">
		<div class="card">
			<div class="row">
				<div class="col-sm-4">
					<img class="img-thumbnail w-100 h-100 fitImage"
					     :src="appData.image.path"/>
				</div>
				<div class="card-body col-sm-8">
					<h5 class="card-title">{{appData.applicationName}}</h5>
					<!-- <p class="card-text">Version {{latestVersion version}}</p> -->
					<p class="card-text">{{currentVersion.version}}</p>
					<button class="btn btn-primary settingsBtn" :data-id="appData.applicationId" v-on:click="select()">
						Settings
					</button>
					<a v-if="iOS" :href="href" class="btn btn-secondary">Download</a>
					<a v-if="!iOS" :href="href" class="btn btn-secondary downloadBtn">Download</a>
				</div>
			</div>
		</div>
		<!-- <SettingsModal :appData="appData" /> -->
	</div>
</template>

<script>
import SettingsModal from './modals/settingsModal.vue';

export default {
	name: 'appNode',
	components: {SettingsModal},
	props: ['appData', 'selectApp', 'index'],
	data() {
		return {
			iOS: (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)),

		}
	},
	methods: {
		select() {

				this.selectApp(this.index);

		}
	},
	computed: {
		href(){
			return this.iOS ? `itms-services://?action=download-manifest&url=${this.currentVersion.path}`
										  : this.currentVersion.path;
		},
		currentVersion() {
			return this.appData.versions.find(version => version.downloadEnabled === 1) || this.appData.versions[0];
		}
		// iOS: (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
	}
}
</script>

<style scoped>
</style>
