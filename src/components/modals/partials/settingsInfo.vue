<template>
	<div class="row">
		<div class="col-md-4 font-weight-bold">
			<h4>{{appData.applicationName}}</h4>
			<p class="mb-0">Version {{latestVersion}}
				<button class="btn btn-link font-weight-normal" data-toggle="modal"
								data-target="#versionHistoryModal"
								v-on:click="showVersions">Version History
				</button>
			</p>
			<p class="mb-0">Last Updated: {{lastUpdatedDate}}</p>
			<p class="mb-0">File Size: {{fileSize}} MB</p>
		</div>
		<div class="col-md-8">
			<p class="mb-0">{{appData.description}}</p>
		</div>
	</div>
</template>

<script>
	import appModalMixin from '../appModalMixin.js';

	export default {
		name: 'settingsInfo',
		props: ['appData', 'showVersions'],
		mixins: [appModalMixin]
	}
</script>

<style scoped>

</style>
