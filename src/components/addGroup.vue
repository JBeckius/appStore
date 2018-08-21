<template>
	<div class="form-row addGroup">
		<button type="button" class="form-group my-1" v-on:click="add" :disabled="!name">Add {{type}}</button>
		<div class="form-Group my-1">
			<input v-model="name" class="groupName form-control" type="text" :placeholder="type + ' Name'" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'addGroup',
		props: ['addGroup', 'type'],
		data() {
			return {
				name: null
			}
		},
		methods: {
			add() {
				this.addGroup(this.name);
				this.name = null;
			}
		}

	}
</script>

<style scoped>
	.addGroup {
		padding-left: 5px;
	}
</style>
