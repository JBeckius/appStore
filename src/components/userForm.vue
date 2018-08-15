<template>
	<form @submit.prevent="update">
		<div class="username field">
			<p>Type a username to create a new user or select 'Search' to update an existing user with that username.</p>
			<input v-model="username" type="text" placeholder="username" :disabled="updating"/>
			<button type="button" v-if="!updating" v-on:click="getUser">Search</button>
			<button type="button" v-if="updating" v-on:click="clearUpdate">X</button>
			<div v-if="noExisting && updating" class="noExisting">
				<p>This user does not exist</p>
				<button type="button" v-on:click="()=>this.noExisting = false">Create User</button>
			</div>
		</div>
		<div class="client field" v-if="updating && !noExisting">
			<select v-model="clientId"
							v-on:click="click"
			>
				<option :value="null" placeholder="client">Client</option>
				<option v-for="(client, index) in clients" :key="index" :value="client.id">{{ client.name }}</option>
			</select>
			<!-- <div class="clientWarning"><p>Selecting a new client will remove current group selections</p></div> -->
		</div>
		<div v-if="client && client.groups.length > 0 && updating && !noExisting" class="groupsSelect">
			<p>Select Groups to instantly add them to a user: </p>
			<div class="groups">
				<Group v-for="group in client.groups"
							 :key="group.id"
							 :selected="groups.includes(group.id)"
							 :group="group"
							 :toggle="toggleGroup"
				/>
			</div>
		</div>
		<!-- <div class="userSubmit">
			<button class="btn btn-primary btn-center mt-3" type="submit" v-if="updating" v-on:click="update">Update</button>
			<button class="btn btn-primary btn-center mt-3" type="submit" v-if="!updating" v-on:click="create">Create</button>
		</div> -->
	</form>
</template>

<script>
	// *** Keys for Group components should be guids and not ints. Otherwise update is incorrect.
	import Group from '../components/group.vue';
	export default {
		name: 'userForm',
		components: {Group},
		props: ['clients', 'getUserGroups', 'addGroup', 'removeGroup'],
		data() {
			return {
				updating: false,
				username: null,
				clientId: null,
				groups: [],
				noExisting: false,
				updatingUser: false

			}
		},
		computed: {
			currentGroups() {
				let group = this.groups.find(group => group.id === this.clientId);
				console.log('groups: ', group.id, this.clientId, group.groups);
				return group ? group.groups : [];
			},
			client() {
				return this.clients.find(client=>client.id === this.clientId);
			}
		},
		methods: {
			// updateUser() {
			// 	this.updating = true;
			// 	this.update();
			// },
			clearUpdate() {
				this.updating = false;
				this.groups = [];
				this.$forceUpdate();
			},
			toggleGroup(id) {
				let idExists = this.groups.includes(id);
				let reqData = {username: this.username, groupId: id};
				if(idExists) {
					return this.removeGroup(reqData)
						.then(()=>{
							this.groups = this.groups.filter(group => group !== id);
						})
						.then(()=>this.getUser())
						.catch(err=>{
							console.log('error removing group: ', id, err);
						});
				}
				else {
					return this.addGroup(reqData)
						.then(()=>{
							this.groups = this.groups.concat([id]);
						})
						.then(()=>this.getUser())
						.catch(err=>{
							console.log('error adding group: ', id);
						});

				}
			},
			getUser() {
				// this.groups = this.resetGroups();
				this.updating = false;
				return this.getUserGroups(this.username)
					.then(groups => {
						console.log('getzin groups: ', groups);
						if(groups.length === 0) return this.noExisting = true;
						else {
							this.groups = groups.map(group => group.id);
							this.updating = true;
							return this.$forceUpdate();
						}
						// this.clientId = user.client.id;
						// let groupIds = user.client.groups.map(group => group.id);
						// this.groups = this.groups.map(group => group.id === this.clientId ? {id: group.id, groups: groupIds} : group);
						// this.$nextTick(()=> this.$forceUpdate());
					})
					.catch(err => {
						console.log('error getting user: ', err);
						this.updating = false;
					});
			},
			click() {
				console.log('click');
			},
			getEmptyClients() {
				return this.clients.map(client=> {console.log(client);return {id: client.id, groups: []};});
			},
			resetGroups() {
				this.groups = this.getEmptyClients();
			}

		},
		watch: {
			// client() {
			// 	this.groups = [0, 1];
			// }
		}
	}
</script>

<style scoped>
	.noExisting {

	}

	.noExisting p {
		color: red;
	}
	.groupsSelect {
			margin-top: 20px;
			max-width: 500px;
			height: 60%;
			margin: 0 auto;
	}
	.groups {
		border: 1px solid grey;
		margin: 0 auto;
		max-height: 300px;
		overflow-y: scroll;
	}

	.client.field {
		margin: 15px 0px;
	}

	.clientWarning {
		font-style: italic;
	}
</style>
