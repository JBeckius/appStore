<template>
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
</template>

<script>
	export default {
		name: 'applicationDetails'
	}
</script>

<style scoped>
</style>
