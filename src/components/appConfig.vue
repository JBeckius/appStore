<template>
	<div class="tab-pane fade show active" id="applicationTab" role="tabpanel">
		<div class="alert alert-secondary">
			<p class="mb-0">You may add an additional AD group for an application here. Applications
				inherit an AD group based on their client</p>
		</div>
		<form id="configMappingApplicationForm" @submit="updateApp">
			<h3>1. Choose an application</h3>
			<div class="form-group">
				<select v-model="selectedAppId" class="form-control" id="configApplication" name="configApplication">
					<option v-if="apps" v-for="app in apps" :value="app.applicationId">{{app.applicationName}}</option>
				</select>
			</div>
			<h3>2. Define Group</h3>
			<div class="form-group">
				<input v-model="appInput" type="text" class="form-control" id="configApplicationGroup" name="configApplicationGroup"
							 placeholder="AD Group Name" required>
				<div class="invalid-feedback">
					Please enter a Group Name.
				</div>
			</div>
			<button class="btn btn-primary btn-center mt-3" type="submit">Submit</button>
		</form>
		<div class="configMappingApplicationMessage"></div>
	</div>
</template>

<script>
	import apiManager from '../api/apiManager.js';

	export default {
		name: "appConfig",
		data() {
			return {
				selectedAppId: null,
				appInput: null
			}
		},
		computed: {
			apps() {
				return this.$store.state.apps;
			}
		},
		methods: {
			updateApp(e) {
				e.preventDefault();
				if(this.appInput) {
					return apiManager.apps.addADGroup(this.selectedAppId, this.appInput)
						.then(()=> this.$store.dispatch('updateApps'))
						.catch(err=>console.log('err updating app AD: ', err));
				}
			}
		}
	};
</script>

<style>
</style>
