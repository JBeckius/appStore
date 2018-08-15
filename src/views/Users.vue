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
			addGroup({username, groupId}={}) {
				return apiManager.user.addGroup({username, groupId});
			},
			removeGroup({username, groupId}={}) {
				return apiManager.user.removeGroup({username, groupId});
			},
			getUserGroups(username) {
				// return Promise.resolve([{
				// 			id: 18,
				// 			name: 'group3'
				// 		}]);
				return apiManager.user.getUserGroups(username).then(resp=>resp.data);

			}
		}

	}
</script>

<style>

</style>
