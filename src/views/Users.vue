<template>
	<div class="Users">
		<p>Add or Update User</p>
		<form @submit.prevent="update">
			<div class="usernameField">
				<input v-model="username" type="text" placeholder="username"/>
				<button type="button" v-if="!updating" v-on:click="getUser">Search</button>
				<button type="button" v-if="updating" v-on:click="clearUpdate">X</button>
			</div>
			<div class="clientField">
				<select v-model="client">
					<option :value="null" placeholder="client">Client</option>
					<option v-for="(client, index) in clients" :key="index" :value="client">{{ client.clientName }}</option>
				</select>
			</div>
			<div v-if="client" class="groupsSelect">
					<Group v-for="group in client.groups"
								 :key="group.id"
								 :selected="groups.includes(group.id)"
								 :group="group"
								 :toggle="toggleGroup"
					/>
			</div>
			<div class="userSubmit">
				<button type="submit" v-if="updating" v-on:click="update">Update</button>
				<button type="submit" v-if="!updating" v-on:click="create">Create</button>
			</div>
		</form>
	</div>

</template>

<script>
import Group from '../components/group.vue';
	export default {
		name: 'Users',
		components: {Group},
		data() {
			return {
				updating: false,
				username: null,
				client: null,
				groups: [0]

			}
		},
		computed: {
			clients() {
				//return this.$store.state.clients;
				return [{
						clientName: 'abc',
						groups: [
							{
								id: 0,
								name: 'group0'
							},
							{
								id: 1,
								name: 'group1'
							},
						]
					},
					{
						clientName: 'def',
						groups: [
							{
								id: 2,
								name: 'group2'
							},
							{
								id: 3,
								name: 'group3'
							},
						]
					}
				]
			}
		},
		methods: {
			update() {
				return console.log('updating');
			},
			create() {
				return console.log('creating');
			},
			getUser() {
				this.updating = true;
			},
			clearUpdate() {
				this.updating = false;
			},
			toggleGroup(id) {
				let idExists = this.groups.includes(id);
				if(idExists) this.groups = this.groups.filter(group => group !== id);
				else this.groups.push(id);
			}
		},
		watch: {
			client() {
				this.groups = [0, 1];
			}
		}

	}
</script>

<style>

</style>
