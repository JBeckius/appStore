<template>
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Settings</h5>
				<button type="button" class="close closeModal" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-md-4 font-weight-bold">
						<h4>{{appData.applicationName}}</h4>
						<p class="mb-0">Version {{latestVersion versions}}
							<button class="btn btn-link font-weight-normal" data-toggle="modal"
							        data-target="#versionHistoryModal">Version History
							</button>
						</p>
						<p class="mb-0">Last Updated: {{lastUpdatedDate lastUpdatedDate}}</p>
						<p class="mb-0">File Size: {{fileSize versions}} MB</p>
					</div>
					<div class="col-md-8">
						<p class="mb-0">{{description}}</p>
					</div>
				</div>
				<div class="alert alert-primary" role="alert">
					<i class="fa fa-info-circle"></i> Please contact an administrator to change any of these settings
				</div>
				{{#if isAdmin}}
					<form v-if="isAdmin" id="settingsForm">
						<div class="form-row">
							<div class="form-group col-md-6">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" name="visible" id="visible"
									       {{#if visibleInDirectory}}checked{{/if}}>
									<label class="form-check-label" for="visibleInDirectory">
										Visible in Directory
									</label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="checkbox" name="downloadEnabled" id="downloadEnabled"
									       {{#if downloadDisabled}}checked{{/if}}>
									<label class="form-check-label" for="downloadEnabled">
										Download Disabled
									</label>
								</div>
								<p>Subdirectory: {{subdirectory.name}}</p>
							</div>
							<div class="form-group col-md-6">
								<div class="form-row">
									<div class="col-md-6 my-1">
										<label class="sr-only" for="settingsModalStartDate">Start Date</label>
										<input type="text" class="form-control" name="dateStart2" id="dateStart2"
										       placeholder="Start Date" value="{{startDate}}">
									</div>
									<div class="col-md-6 my-1">
										<label class="sr-only" for="settingsModalEndDate">End Date</label>
										<input type="text" class="form-control" name="dateEnd2" id="dateEnd2"
										       placeholder="End Date" value="{{endDate}}">
										<small id="endDateHelp" class="form-text text-muted">If blank, never expires</small>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<span class="m-auto">
								<button type="button" class="btn btn-secondary closeModal" data-dismiss="modal">Cancel</button>
								<button type="submit" class="btn btn-primary">Update</button>
							</span>
						</div>
					</form>
				{{else}}
					<div v-if="!isAdmin" class="form-row">
						<div class="form-group col-md-6">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" id="visible" name="visible"
								       {{#if visibleInDirectory}}checked{{/if}} disabled>
								<label class="form-check-label" for="visible">
									Visible in Directory
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" id="downloadEnabled" name="downloadEnabled"
								       {{#if downloadDisabled}}checked{{/if}} disabled>
								<label class="form-check-label" for="downloadEnabled">
									Download Disabled
								</label>
							</div>
							<p>Subdirectory: {{subdirectory.name}}</p>
						</div>
						<div class="form-group col-md-6">
							<div class="form-row">
								<div class="col-md-6 my-1">
									<label class="sr-only" for="settingsModalStartDate">Start Date</label>
									<input type="text" class="form-control" name="dateStart2" id="dateStart2"
									       placeholder="Start Date" value="{{startDate}}" disabled>
								</div>
								<div class="col-md-6 my-1">
									<label class="sr-only" for="settingsModalEndDate">End Date</label>
									<input type="text" class="form-control" name="dateEnd2" id="dateEnd2"
									       placeholder="End Date" value="{{endDate}}" disabled>
									<small id="endDateHelp" class="form-text text-muted">If blank, never expires</small>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<span class="m-auto">
							<button type="button" class="btn btn-secondary closeModal" id="closeModal" data-dismiss="modal">Cancel</button>
						</span>
					</div>
				{{/if}}
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'settingsModal',

	}
</script>

<style scoped>

</style>
