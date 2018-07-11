<template>
	<tr >
		<th scope="row">{{version.version}}</th>
		<td>{{date}}</td>
		<td>{{fileSize}} MB</td>
		<td>
			<div class="form-check">
				<input class="form-check-input position-static" type="checkbox"
							 :id="'isDownloadable' + version.id" value="downloadable" :checked="version.downloadEnabled">
			</div>
		</td>
		<td>
			<button v-if="version.downloadEnabled" type="button" class="btn btn-primary">Download</button>
		</td>
	</tr>
</template>

<script>
	import moment from 'moment';
	export default {
		name: 'version',
		props: ['version'],
		computed: {
			date() {
				return moment(this.version.dateUploaded).format("MM/DD/YYYY");
			},
			fileSize() {
				return this.version ? this.version.fileSize : '1';
			}
		}
	}
</script>

<style scoped>
</style>
