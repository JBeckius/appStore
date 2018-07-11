<template>
	<div class="tab-pane fade" id="uploadAppTab">
		<form enctype="multipart/form-data" id="uploadAppForm" method="post" novalidate>
			<div class="card">
				<h5 class="card-header">Application Details</h5>
				<div class="card-body">
					<div class="form-row">
						<div class="form-group col-md-3">
							<select class="form-control" id="relatedApps" name="relatedApps">
								<option value="" selected="selected">Related Application</option>
								{{#if apps}}
									{{#each apps as |app|}}
										<option value="{{app.applicationId}}">{{app.applicationName}}</option>
									{{/each}}
								{{/if}}
							</select>
						</div>
						<div class="form-group col-md-6">
							<input type="text" class="form-control" id="name" name="name"
										 placeholder="Application Name" required>
							<div class="invalid-feedback">
								Please enter a name.
							</div>
						</div>
						<div class="form-group col-md-3">
							<input type="text" class="form-control" id="version" name="version"
										 placeholder="Application Version" required>
							<div class="invalid-feedback">
								Please enter a version.
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-4">
							<select class="form-control" id="subdirectory" name="subdirectory">
								<option value="" selected="selected">Subdirectory</option>
								{{#if subdirectories}}
									{{#each subdirectories as |subdirectory|}}
										<option value="{{subdirectory.id}}">{{subdirectory.name}}</option>
									{{/each}}
								{{/if}}
							</select>
						</div>
						<div class="form-group col-md-8">
							<input type="text" class="form-control" id="description" name="description"
										 placeholder="Application Description" required>
							<div class="invalid-feedback">
								Please enter a description.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<h5 class="card-header">Application Files</h5>
				<div class="card-body">
					<div class="form-row">
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<input type="text" class="form-control" id="appIcon" name="appIcon"
											 placeholder="Upload Application Icon">
								<input type="file" accept="image/*" class="d-none" id="appIconFile"
											 name="appIconFile"/>
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" name="appIconFileBtn"
													id="appIconFileBtn"
													type="button">Upload
									</button>
								</div>
							</div>
						</div>
						<div class="form-group col-md-6">
							<input type="text" class="form-control" id="bundleId" name="bundleId"
										 placeholder="Bundle Name">
						</div>
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<input type="text" class="form-control" id="ipaFileName" name="ipaFileName"
											 placeholder="Enterprise Distribution File(.IPA)">
								<input type="file" class="d-none" id="ipaFile" name="ipaFile"/>
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" name="ipaFileBtn" id="ipaFileBtn"
													type="button">Upload
									</button>
								</div>
							</div>
						</div>
						<div class="form-group col-md-6">
							<div class="input-group mb-3">
								<input type="text" class="form-control" name="apkFileName" id="apkFileName"
											 placeholder="Android File(.APk)">
								<input type="file" class="d-none" id="apkFile" name="apkFile"/>
								<div class="input-group-append">
									<button class="btn btn-outline-secondary" name="apkFileBtn" id="apkFileBtn"
													type="button">Upload
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card">
				<h5 class="card-header">Security Settings</h5>
				<div class="card-body">
					<div class="form-row">
						<div class="form-group col-md-4 my-1">
							<select class="form-control" id="clients" name="clients" required>
								<option value="" class="dropDownPlaceHolder">Select Client</option>
								{{#if clients}}
									{{#each clients as |client|}}
										<option value="{{client.id}}">{{client.clientName}}</option>
									{{/each}}
								{{/if}}
							</select>
							<div class="d-none" id="curcli">

															</div>
							<div class="invalid-feedback">
								Please select a client.
							</div>
						</div>
						<div class="form-group col-md-4 my-1">
							<label class="sr-only" for="startDate">Start Date</label>
							<input type="text" class="form-control" name="dateStart" id="dateStart"
										 placeholder="Start Date">
						</div>
						<div class="form-group col-md-4 my-1">
							<label class="sr-only" for="endDate">End Date</label>
							<input type="text" class="form-control" name="dateEnd" id="dateEnd"
										 placeholder="End Date">
						</div>
					</div>
					<div class="form-row align-items-center">
						<div class="col-auto my-1">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" id="disablePreviousVersion" name="disablePreviousVersion">
								<label class="form-check-label" for="disablePreviousVersion">
									Disable Previous Version
								</label>
							</div>
						</div>
						<div class="col-auto my-1">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" id="visible" name="visible" checked>
								<label class="form-check-label" for="visible">
									Visible within Directory
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
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
