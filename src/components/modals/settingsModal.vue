<template>
	<div class="settingsModal">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Settings</h5>
					<button type="button" class="close closeModal" data-dismiss="modal" aria-label="Close" v-on:click="close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-4 font-weight-bold">
							<h4>{{appData.applicationName}}</h4>
							<p class="mb-0">Version {{latestVersion}}
								<button class="btn btn-link font-weight-normal" data-toggle="modal"
								        data-target="#versionHistoryModal"
												v-on:click="showVersions">Version History
								</button>
							</p>
							<p class="mb-0">Last Updated: {{lastUpdatedDate}}</p>
							<p class="mb-0">File Size: {{fileSize}} MB</p>
						</div>
						<div class="col-md-8">
							<p class="mb-0">{{appData.description}}</p>
						</div>
					</div>
					<div v-if="!isAdmin" class="alert alert-primary" role="alert">
						<i class="fa fa-info-circle"></i> Please contact an administrator to change any of these settings
					</div>
						<form v-if="isAdmin" id="settingsForm">
							<div class="form-row">
								<div class="form-group col-md-6">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" name="visible" id="visible"
										       :checked="appData.visible">
										<label class="form-check-label" for="visibleInDirectory">
											Visible in Directory
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="checkbox" name="downloadEnabled" id="downloadEnabled"
										       :checked="!appData.downloadEnabled">
										<label class="form-check-label" for="downloadEnabled">
											Download Disabled
										</label>
									</div>
									<p>Subdirectory: {{appData.subdirectory.name}}</p>
								</div>
								<div class="form-group col-md-6">
									<div class="form-row">
										<div class="col-md-6 my-1">
											<label class="sr-only" for="settingsModalStartDate">Start Date</label>
											<input type="text" class="form-control" name="dateStart2" id="dateStart2"
											       placeholder="Start Date" :value="appData.dateStart">
										</div>
										<div class="col-md-6 my-1">
											<label class="sr-only" for="settingsModalEndDate">End Date</label>
											<input type="text" class="form-control" name="dateEnd2" id="dateEnd2"
											       placeholder="End Date" :value="appData.dateEnd">
											<small id="endDateHelp" class="form-text text-muted">If blank, never expires</small>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<span class="m-auto">
									<button type="button" class="btn btn-secondary closeModal" data-dismiss="modal" v-on:click="close">Cancel</button>
									<button type="submit" class="btn btn-primary">Update</button>
								</span>
							</div>
						</form>
						<div v-if="!isAdmin" class="form-row">
							<div class="form-group col-md-6">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="visible" name="visible"
									       :checked="appData.visible" disabled>
									<label class="form-check-label" for="visible">
										Visible in Directory
									</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="checkbox" id="downloadEnabled" name="downloadEnabled"
									       :checked="!appData.downloadEnabled" disabled>
									<label class="form-check-label" for="downloadEnabled">
										Download Disabled
									</label>
								</div>
								<p>Subdirectory: {{appData.subdirectory.name}}</p>
							</div>
							<div class="form-group col-md-6">
								<div class="form-row">
									<div class="col-md-6 my-1">
										<label class="sr-only" for="settingsModalStartDate">Start Date</label>
										<input type="text" class="form-control" name="dateStart2" id="dateStart2"
										       placeholder="Start Date" :value="appData.dateStart" disabled>
									</div>
									<div class="col-md-6 my-1">
										<label class="sr-only" for="settingsModalEndDate">End Date</label>
										<input type="text" class="form-control" name="dateEnd2" id="dateEnd2"
										       placeholder="End Date" :value="appData.dateEnd" disabled>
										<small id="endDateHelp" class="form-text text-muted">If blank, never expires</small>
									</div>
								</div>
							</div>
						</div>
						<!-- <div class="modal-footer">
							<span class="m-auto">
								<button type="button" class="btn btn-secondary closeModal" id="closeModal" data-dismiss="modal">Cancel</button>
							</span>
						</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from 'moment';

	export default {
		name: 'settingsModal',
		// props: ['appData', 'close'],
		props: {
			appData: {
				type: Object,
				required: true
			},
			close: {
				type: Function,
				required: true
			},
			showVersions: {
				type: Function,
				required: true
			}
		},
		data() {
			return {
				isAdmin: true
			}
		},
		computed: {
			latestVersion() {
				let versions = this.appData.versions;
				return (versions && versions.length) > 0 ? versions[0].version : "No version #";
			},
			fileSize() {
				let versions = this.appData.versions;
				return (versions && versions.length) > 0 ? versions[0].fileSize : "No file size";
			},
			lastUpdatedDate() {
				return moment(this.appData.lastUpdated).format("MM/DD/YYYY");
			}
		}
	}
</script>

<style scoped>
	.settingsModal {
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


	}

</style>
