<template>
	<tr >
		<th scope="row">{{version.version}}</th>
		<td>{{date}}</td>
		<td>{{fileSize/1000}} MB</td>
		<td>
			<div class="form-check">
				<input class="form-check-input position-static" type="checkbox"
							 :id="'isDownloadable' + version.id" value="downloadable" :checked="version.downloadEnabled" :disabled="!isAdmin">
			</div>
		</td>
		<td>
			<button v-if="version.downloadEnabled" type="button" v-on:click="download" class="btn btn-primary">Download</button>
			<p class="noApp" v-if="noApp">No download for this device</p>
		</td>
	</tr>
</template>

<script>
	import moment from 'moment';
	import apiManager from '../../../api/apiManager.js';
	export default {
		name: 'version',
		props: ['version'],
		data() {
			return {
				noApp: false
			}
		},
		computed: {
			date() {
				return moment(this.version.dateUploaded).format("MM/DD/YYYY");
			},
			fileSize() {
				return this.version ? this.version.fileSize : '1';
			},
			isAdmin() {
				return this.$store.state.isAdmin;
			}
		},
		methods: {
			download() {
				return apiManager.executables.download(this.version.id)
					.catch(err=> {
						this.noApp = true;
					});
			}
		}
	}
</script>

<style scoped>
 .noApp {
	 color: red;
	 padding: 3px;
	 margin: 0;
 }
</style>
