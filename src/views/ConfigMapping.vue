<template>
	<div class="tab-content" id="configMappingTabs">
		<div class="configNav">
			<div class="application" :class="{activeTab: (currentTab===0)}" v-on:click="changeTab(0)">Application</div>
			<div class="clients" :class="{activeTab: (currentTab===1)}" v-on:click="changeTab(1)">Clients</div>
		</div>
		<AppConfig v-if="currentTab === 0" />
		<ClientConfig v-if="currentTab === 1" />
		<!-- <div v-if="currentTab === 1" class="tab-pane fade show active" id="clientsTab" role="tabpanel">
			<div class="alert alert-secondary">
				<p class="mb-0">You may modify the AD group for a specific client, or add clients to the
					system</p>
			</div>
			<form id="configMappingClientsForm">
				<h3>1. Choose an client</h3>
				<div class="form-group">
					<select type="text" v-model="selectedClient" class="form-control" id="configClient" name="configClient" required>
						<option value="">Clients</option>
						<option v-for="client in clients" :value="client.id">{{client.clientName}}</option>
						<option :value="'new'">Add New</option>
					</select>
					<div class="invalid-feedback">
						Please enter a Client Name.
													</div>
				</div>
				<h3>2. Define Group</h3>
				<div class="form-group">
					<input v-model="clientName" type="text" class="form-control" id="configClientGroup" name="configClientGroup"
								 placeholder="Client Name" required>
					<input v-if="selectedClient === 'new'"v-model="clientAD" type="text" class="form-control" name="configClientADGroup" placeholder="Client AD Name">
					<div class="invalid-feedback">
						Please enter a Group Name.
					</div>
				</div>
				<button v-on:click="modifyClient" class="btn btn-primary btn-center mt-3" type="button">Submit</button>
			</form>
			<div class="configMappingClientMessage"></div>
		</div> -->
	</div>
</template>

<script>
	import apiManager from '../api/apiManager.js';
	import AppConfig from '../components/appConfig.vue';
	import ClientConfig from '../components/clientConfig.vue';
	export default {
		name: 'configMapping',
		components: {AppConfig, ClientConfig},
		data() {
			return {
				currentTab: 0
			}
		},
		computed: {
			apps() {
				return this.$store.state.apps;
			},
			clients() {
				return this.$store.state.clients;
			},

		},
		methods: {
			changeTab(index) {
				this.currentTab = index;
			}
		}

	};
</script>

<style scoped>
	.activeTab {
		color: #A5DBC2;
	}
</style>
