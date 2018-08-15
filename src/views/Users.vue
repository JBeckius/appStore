<template>
	<div class="Users">
		<h5>Add or Update User</h5>
		<UserForm :getUserGroups="getUserGroups"
							:clients="clients"
							:addGroup="addGroup"
							:removeGroup="removeGroup"
		/>
	</div>

</template>

<script>

	import UserForm from '../components/userForm.vue';
	import apiManager from '../api/apiManager.js';
	export default {
		name: 'Users',
		components: {UserForm},
		computed: {
			clients() {
				return this.$store.state.clients;
			}
		},
		methods: {
			addGroup() {
				return this.apiManager.user.addGroup
			},
			removeGroup() {

			},
			getUserGroups() {
				this.updating = true;
				return Promise.resolve([{
							id: 18,
							name: 'group3'
						}]);

			}
		}

	}
</script>

<style>

</style>
