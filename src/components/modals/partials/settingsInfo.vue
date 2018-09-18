<template>
	<div >
		<!-- <div class="col-md-4 font-weight-bold"> -->
			<h4>{{appData.applicationName}}</h4>
			<p class="mb-0 description">{{appData.description}}</p>
			<p class="mb-0">Version {{latestVersion}}
				<button v-if="isAdmin || appData.downloadEnabled"
								class="btn btn-link font-weight-normal" data-toggle="modal"
								data-target="#versionHistoryModal"
								v-on:click="showVersions">Version History
				</button>
			</p>
			<p class="mb-0">Last Updated: {{lastUpdatedDate}}</p>
			<p class="mb-0">File Size: {{fileSize}} MB</p>
			<p class="mb-0">Client: {{clientName}}</p>
			<p class="mb-0"> Group: {{appData.groups[0].name}}</p>
			<hr />
		<!-- </div> -->
		<!-- <div class="col-md-8">

		</div> -->
	</div>
</template>

<script>
	import appModalMixin from '../appModalMixin.js';

	export default {
		name: 'settingsInfo',
		props: ['appData', 'showVersions', 'clients'],
		mixins: [appModalMixin],
		computed: {
			clientName() {
				let client = this.clients.find((client)=>client.id === this.appData.clientId);
				return client ? client.name : 'None';
			},
			isAdmin() {
				return this.$store.getters.isAdmin;
			}
		}
	}
</script>

<style scoped>
 p {
	 text-align: center;
 }
 button {
	 border: 0px;
 }
</style>
