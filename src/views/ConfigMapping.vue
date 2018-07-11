<template>
	<div class="tab-content" id="configMappingTabs">
		<div class="configNav">
			<div class="application" :class="{activeTab: (currentTab===0)}" v-on:click="changeTab(0)">Application</div>
			<div class="clients" :class="{activeTab: (currentTab===1)}" v-on:click="changeTab(1)">Clients</div>
		</div>
		<div v-if="currentTab === 0" class="tab-pane fade show active" id="applicationTab" role="tabpanel">
			<div class="alert alert-secondary">
				<p class="mb-0">You may add an additional AD group for an application here. Applications
					inherit an AD group based on their client</p>
			</div>
			<form id="configMappingApplicationForm">
				<h3>1. Choose an application</h3>
				<div class="form-group">
					<select class="form-control" id="configApplication" name="configApplication">
						<option v-if="apps" v-for="app in apps" :value="app.applicationId">{{app.applicationName}}</option>
					</select>
				</div>
				<h3>2. Define Group</h3>
				<div class="form-group">
					<input type="text" class="form-control" id="configApplicationGroup" name="configApplicationGroup"
								 placeholder="AD Group Name" required>
					<div class="invalid-feedback">
						Please enter a Group Name.
					</div>
				</div>
				<button class="btn btn-primary btn-center mt-3" type="submit">Submit</button>
			</form>
			<div class="configMappingApplicationMessage"></div>
		</div>
		<div v-if="currentTab === 1" class="tab-pane fade show active" id="clientsTab" role="tabpanel">
			<div class="alert alert-secondary">
				<p class="mb-0">You may modify the AD group for a specific client, or add clients to the
					system</p>
			</div>
			<form id="configMappingClientsForm">
				<h3>1. Choose an client</h3>
				<div class="form-group">
					<select class="form-control" id="configClient" name="configClient" required>
						<option value="">Clients</option>
								<option v-if="clients" v-for="client in clients" :value="client.id">{{client.clientName}}</option>
					</select>
					<div class="invalid-feedback">
						Please enter a Client Name.
													</div>
				</div>
				<h3>2. Define Group</h3>
				<div class="form-group">
					<input type="text" class="form-control" id="configClientGroup" name="configClientGroup"
								 placeholder="AD Group Name" required>
					<div class="invalid-feedback">
						Please enter a Group Name.
					</div>
				</div>
				<button class="btn btn-primary btn-center mt-3" type="submit">Submit</button>
			</form>
			<div class="configMappingClientMessage"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'configMapping',
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
			}
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
