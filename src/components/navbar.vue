<template>
	<ul class="nav nav-tabs" id="appStoreTabs" role="tablist">
		<li class="nav-item">
			<a class="nav-link active" data-toggle="tab" href="#directoryTab">Directory</a>
		</li>
		<li class="nav-item" v-if="isAdmin">
			<a class="nav-link" data-toggle="tab" href="#uploadAppTab">Upload App</a>
		</li>
		<li class="nav-item" v-if="isAdmin">
			<a class="nav-link" data-toggle="tab" href="#configMappingTab">Config Mapping</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#logout">Logout</a>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'navbar',
		props: ['isAdmin']
	};
</script>

<style scoped>
</style>
