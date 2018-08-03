<template>
	<div class="tab-pane fade show active" id="clientsTab" role="tabpanel">
		<div class="alert alert-secondary">
			<p class="mb-0">You may modify the AD group for a specific client, or add clients to the
				system</p>
		</div>
		<form id="configMappingClientsForm" @submit="modifyClient">
			<h3>1. Choose an client</h3>
			<div class="form-group">
				<select type="text" v-model="selectedClient" class="form-control" id="configClient" name="configClient" required>
					<option :value="null">Clients</option>
					<option v-for="client in clients" :value="client">{{client.clientName}}</option>
					<option :value="'new'">Add New</option>
				</select>
				<div class="invalid-feedback">
					Please enter a Client Name.
												</div>
			</div>
			<h3>2. Define Group</h3>
			<div class="form-group">
				<input v-model="clientAD" type="text" class="form-control" id="configClientGroup" name="configClientADGroup"
							 :placeholder="selectedClient && selectedClient !== 'new'? selectedClient.adName : 'AD Group Name'" required>
				<input v-if="selectedClient === 'new'"v-model="clientName" type="text" class="form-control" name="configClientGroup" placeholder="Client Name">
				<div class="invalid-feedback">
					Please enter a Group Name.
				</div>
			</div>
			<button class="btn btn-primary btn-center mt-3" type="submit">Submit</button>
		</form>
		<div class="configMappingClientMessage">
			<div v-if="status === 'uploading'" class="uploading">Uploading</div>
			<div v-if="status === 'success'"class="success">Success!</div>
			<div v-if="status === 'failure'"class="failure">Oh snap! Change a few things and try submitting again.</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'clientConfig',
		props: ['clients', 'update', 'create'],
		data() {
			return {
				selectedClient: 'null',
				clientName: null,
				clientAD: null,
				status: null
			}
		},
		computed: {
			modifyClient() {
				return this.selectedClient === "new" ? this.createClient : this.updateClient;
			},
			selectedAD() {
				return this.clientAD || this.selectedClient.adName || "Client AD Group";
			}
		},
		methods: {
			createClient(e) {
				e.preventDefault()
				console.log('creating client: ', this.clientName, this.selectedAD);
				this.status = 'uploading';
				this.create({clientName: this.clientName, adName: this.selectedAD})
					.then(()=> {
						this.status = 'success';
					})
					.catch(() => {
						this.status = 'failure';
					})
					.finally(() => {
						setTimeout(() => {
							this.status = null;
						}, 2000);
					});
			},
			updateClient(e) {
				e.preventDefault()
				console.log('updating client: ', this.selectedClient.clientName, this.selectedAD);
				this.status = 'uploading';
				this.update({adName: this.selectedAD, id: this.selectedClient.id})
					.then(()=> {
						this.status = 'success';
					})
					.catch(() => this.status = 'failure')
					.finally(() => {
						setTimeout(() => {
							this.status = null;
						}, 2000);
					})
			}
		}
	};
</script>

<style scoped>
#configMappingClientsForm {
	max-width: 500px;
	margin: 0 auto;
}
</style>
