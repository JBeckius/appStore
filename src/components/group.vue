<template>
	<div class="group">
		<p>{{group.name}}</p>
		<input type="checkbox" v-model="check" />
	</div>
</template>

<script>
	export default {
		name: 'group',
		props: ['group', 'selected', 'toggle'],
		data() {
			return {
				check: this.selected
			}
		},
		watch: {
			check() {
				console.log(this.group.id);
				this.toggle(this.group.id);
			}
		}

	}
</script>

<style scoped>
</style>
