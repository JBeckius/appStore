<template>
	<div class="group">
		<!-- <div class="verticalAlign"> -->
			<p>{{group.name}}</p>
		<!-- </div> -->
		<div class="verticalAlign">
			<input type="checkbox" v-model="check" />
		</div>
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
.group {
	display: flex;
	justify-content: space-between;
	padding: 0 10%;
}
.group:nth-child(even) {
	background-color: lightgrey;
}
p {
	display: inline;
	margin-bottom: 0;
}

.verticalAlign {
	display:flex;
	flex-direction: column;
	justify-content: center;
}
input {

}
</style>
