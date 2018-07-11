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
					<p class="card-text">Version 1.x</p>
					<button class="btn btn-primary settingsBtn" :data-id="appData.applicationId">
						Settings
					</button>
					<!-- <a v-if="iOS" :href="href" class="btn btn-secondary">Download</a>
					<a v-if="!iOS" :href="href" class="btn btn-secondary downloadBtn" :data-url="appData.applicationId">Download</a> -->
				</div>
			</div>
		</div>
		<SettingsModal :appData="appData" />
	</div>
</template>

<script>
import SettingsModal from './modals/settingsModal.vue';

export default {
	name: 'appNode',
	components: {SettingsModal},
	props: ['appData'],
	data() {
		return {
			iOS: (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
		}
	},
	computed: {
		// href: this.iOS ? `itms-services://?action=download-manifest&url=${this.appData.versions[1].path}`
		// 							 : "#",
		// iOS: (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
	}
}
</script>

<style scoped>
</style>
