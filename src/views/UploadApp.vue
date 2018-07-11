<template>
	<div class="tab-pane fade" id="uploadAppTab">
		<form enctype="multipart/form-data" id="uploadAppForm" method="post" novalidate>
			<button class="btn btn-primary btn-center mt-3"  id="uploadAppBtn" type="submit">Upload</button>
		</form>
		<div class="uploadAppMessage"></div>
	</div>
</template>

<script>

	export default {
		name: 'uploadApp',

	}
</script>

<style scoped>

</style>
