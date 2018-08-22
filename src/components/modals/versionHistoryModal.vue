<template>
	<div class="versionHistoryModal">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Version History</h5>
					<button type="button" v-on:click="close" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col font-weight-bold">
							<h4>{{appData.applicationName}}</h4>
							<p class="mb-0">Version {{latestVersion}}</p>
						</div>
					</div>
					<form id="versionHistoryForm">
						<div class="form-row table-responsive">
							<table class="table">
								<thead>
								<tr>
									<th scope="col">Version</th>
									<!-- <th scope="col">Uploaded Date</th> -->
									<th scope="col">File Size</th>
									<th scope="col">Downloadable</th>
									<th scope="col">Action</th>
								</tr>
								</thead>
								<tbody>
									<Version v-for="(version, index) in appData.versions"
													 :version="version"
													 v-if="Math.ceil((index + 1)/versionsPerPage) === currentPage"
													 :update="updateVersion"
									/>
								</tbody>
							</table>
						</div>
						<div class="form-row">
							<nav aria-label="Page navigation example" class="w-100">
								<ul class="pagination justify-content-center">
									<li class="page-item" :class="{disabled: currentPage === 1}">
										<a class="page-link" v-on:click="prevPage" href="#" tabindex="-1">Newer</a>
									</li>
									<li class="page-item" :class="{disabled: currentPage === totalPages}">
										<a class="page-link" v-on:click="nextPage" href="#">Older</a>
									</li>
								</ul>
							</nav>
						</div>
					</form>
				</div>
				<div class="modal-footer">
						<span class="m-auto">
							<button type="button" v-on:click="close" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" v-on:click="submitUpdates" class="btn btn-primary update" :disabled="!isAdmin">Update</button>
						</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment';
	import modalMixin from './appModalMixin.js';
	import Version from './partials/version.vue';
	import apiManager from '../../api/apiManager.js';

	export default {
		name: 'versionHistoryModal',
		props: ['appData', 'close'],
		mixins: [modalMixin],
		components: {Version},
		data() {
			return {
				versionsPerPage: 3,
				currentPage: 1,
				changeList: [],
				versions: this.appData.versions,
				updated: []
			}
		},
		methods: {
			formatDate(rawDate) {
				return moment(rawDate).format("MM/DD/YYYY");
			},
			nextPage() {
				if(this.currentPage < this.totalPages) this.currentPage += 1;
			},
			prevPage() {
				if(this.currentPage > 1) this.currentPage -= 1;
			},
			updateVersion(versionId, isEnabled) {
				let enabledInt = isEnabled ? 1 : 0;
				this.versions.find(version=>version.id===versionId).downloadEnabled = enabledInt;
				if( !this.updated.find(id => versionId === id) ) this.updated.push(versionId);
			},
			submitUpdates() {
				let updatedVersions = this.versions.filter( version => this.updated.includes(version.id));
				let updatePromises = updatedVersions.map(version => apiManager.executables.put('', version));
				Promise.all(updatePromises)
					.catch(err => {
						console.log('failed to update versions: ', err);
					})
					.then(respArr => {
						return this.$store.dispatch('updateApps');
					})

			}
		},
		computed: {
			totalPages() {
				return Math.ceil(this.appData.versions.length / this.versionsPerPage);
			},
			isAdmin() {
				return this.$store.getters.isAdmin;
			}
		}
	}
</script>

<style scoped>
	.versionHistoryModal {
		/* width: 80%;
		margin: 10% 10%;
		height: 80%;
		position: fixed;
		top: 0;
		left: 0; */
		position: fixed;
		top: 0;
		left: 0;
		width: 80%;
		margin: 0 10%;
		height: 100%;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;

	}
	.versionHistoryModal::-webkit-scrollbar {
		display: none;
	}
	#versionHistoryForm {
		pointer-events: initial;
	}
	.modal-footer {
		margin-bottom: 15px;
	}
</style>
