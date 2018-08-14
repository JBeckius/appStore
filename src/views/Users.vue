<template>
	<div class="Users">
		<h5>Add or Update User</h5>
		<UserForm :userGroupsRequest="userRequest"
							:clients="clients"
							:update="update"
							:create="create"
		/>
	</div>

</template>

<script>

	import UserForm from '../components/userForm.vue';
	export default {
		name: 'Users',
		components: {UserForm},
		computed: {
			clients() {
				return this.$store.state.clients;
				// return [{
				// 		id: 0,
				// 		clientName: 'abc',
				// 		groups: [
				// 			{
				// 				id: 0,
				// 				name: 'group0'
				// 			},
				// 			{
				// 				id: 1,
				// 				name: 'group1'
				// 			},
				// 			{
				// 				id: 2,
				// 				name: 'group0'
				// 			},
				// 			{
				// 				id: 3,
				// 				name: 'group1'
				// 			},
				// 			{
				// 				id: 4,
				// 				name: 'group0'
				// 			},
				// 			{
				// 				id: 5,
				// 				name: 'group1'
				// 			},
				// 			{
				// 				id: 6,
				// 				name: 'group0'
				// 			},
				// 			{
				// 				id: 7,
				// 				name: 'group1'
				// 			},
				// 			{
				// 				id: 8,
				// 				name: 'group0'
				// 			},
				// 			{
				// 				id: 9,
				// 				name: 'group1'
				// 			},
				// 		]
				// 	},
				// 	{
				// 		clientName: 'def',
				// 		id: 1,
				// 		groups: [
				// 			{
				// 				id: 24,
				// 				name: 'group2'
				// 			},
				// 			{
				// 				id: 34,
				// 				name: 'group3'
				// 			},
				// 		]
				// 	}
				// ]
			}
		},
		methods: {
			update() {
				return console.log('updating');
			},
			create() {
				return console.log('creating');
			},
			userGroupsRequest() {
				this.updating = true;
				return Promise.resolve({
					client: {
						id: 1,
						groups: [{
							id: 34,
							name: 'group3'
						}]
					}
				});
			}
		}

	}
</script>

<style>

</style>
