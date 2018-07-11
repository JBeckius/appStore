<template>
	<div class="tab-pane" id="uploadAppTab">
		<form enctype="multipart/form-data" id="uploadAppForm" method="post" novalidate>
			<ApplicationDetails />
			<ApplicationFiles />
			<SecuritySettings />
			<button class="btn btn-primary btn-center mt-3"  id="uploadAppBtn" type="submit">Upload</button>
		</form>
		<div class="uploadAppMessage"></div>
	</div>
</template>

<script>
	import ApplicationDetails from '../components/applicationDetails.vue'
	import ApplicationFiles from '../components/applicationFiles.vue'
	import SecuritySettings from '../components/securitySettings.vue'

	export default {
		name: 'uploadApp',
		components: {
			ApplicationDetails,
			ApplicationFiles,
			SecuritySettings
		},
	}
</script>

<style scoped>

</style>
