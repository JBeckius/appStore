<template>
	<div class="card">
		<h5 class="card-header">Application Files</h5>
		<div class="card-body">
			<div class="form-row">
				<div class="form-group col-md-6">
					<div class="input-group mb-3">
						<input v-model="appIcon" type="text" class="form-control" id="appIcon" name="appIcon"
									 placeholder="Upload Application Icon">
						<input v-on:change="" type="file" accept="image/*" class="d-none" id="appIconFile"
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
					<input v-model="bundleid" type="text" class="form-control" id="bundleId" name="bundleId"
								 placeholder="Bundle Name">
				</div>
				<div class="form-group col-md-6">
					<div class="input-group mb-3">
						<input v-model="ipaFileName" type="text" class="form-control" id="ipaFileName" name="ipaFileName"
									 placeholder="Enterprise Distribution File(.IPA)">
						<input v-on:change="" type="file" class="d-none" id="ipaFile" name="ipaFile"/>
						<div class="input-group-append">
							<button class="btn btn-outline-secondary" name="ipaFileBtn" id="ipaFileBtn"
											type="button">Upload
							</button>
						</div>
					</div>
				</div>
				<div class="form-group col-md-6">
					<div class="input-group mb-3">
						<input v-model="apkFileName" type="text" class="form-control" name="apkFileName" id="apkFileName"
									 placeholder="Android File(.APk)">
						<input v-on:change="" type="file" class="d-none" id="apkFile" name="apkFile"/>
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
</template>

<script>
	export default {
		name: 'applicationFiles',
		// props: ['bundleId'],
		data() {
			return {
				appIcon: null,
				bundleid: null,
				ipaFileName: null,
				apkFileName: null
			}
		},
		computed: {
			bundleId() {
				this.$emit('update:bundleId', this.bundleid);
			}
		}
	}
</script>

<style scoped>
</style>
