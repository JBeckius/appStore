<template>
	<div class="versionHistoryModal">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Version History</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col font-weight-bold">
							<h4>{{applicationName}}</h4>
							<p class="mb-0">Version {{latestVersion versions}}</p>
						</div>
					</div>
					<form id="versionHistoryForm">
						<div class="form-row table-responsive">
							<table class="table">
								<thead>
								<tr>
									<th scope="col">Version</th>
									<th scope="col">Uploaded Date</th>
									<th scope="col">File Size</th>
									<th scope="col">Downloadable</th>
									<th scope="col">Action</th>
								</tr>
								</thead>
								<tbody>
								{{#if versions}}
									{{#each versions as |version|}}
										{{> version}}
									{{/each}}
								{{/if}}
								</tbody>
							</table>
						</div>
						<div class="form-row">
							<nav aria-label="Page navigation example" class="w-100">
								<ul class="pagination justify-content-center">
									<li class="page-item disabled">
										<a class="page-link" href="#" tabindex="-1">Previous</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="#">Next</a>
									</li>
								</ul>
							</nav>
						</div>
					</form>
				</div>
				<div class="modal-footer">
						<span class="m-auto">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button type="button" class="btn btn-primary">Update</button>
						</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'versionHistoryModal',
		props: ['appData']
	}
</script>

<style scoped>

</style>
