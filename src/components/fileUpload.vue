<template>
	<form enctype="multipart/form-data" novalidate >
		<div class="dropbox" :class="{success: isSuccess, failed: isFailed}">
			<input v-if="isInitial || isSaving" type="file"
						:name="name"
						:disabled="isSaving"
						@change="save($event.target.name, $event.target.files[0])"
						:accept="fileType"
						class="input-file"
			/>
	    <p v-if="isInitial">Drag your {{name}} here to begin<br /> or click to browse</p>
	    <p v-if="isSaving">Uploading file</p>
			<p v-if="isSuccess">{{ name }} upload successful</p>
			<p v-if="isFailed">{{ name }} upload unsuccessful</p>
	  </div>
	</form>
</template>

<script>
	import apiManager from '../api/apiManager.js';

	const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

	export default {
		name: 'fileUploader',
		props: ['fileType', 'name', 'upload'],
		data() {
			return {
				uploadedFile: null,
				uploadError: null,
				currentStatus: null,
				uploadFieldName: 'photos'
			}
		},
		computed: {
			isInitial() {
				return this.currentStatus === STATUS_INITIAL;
			},
			isSaving() {
				return this.currentStatus === STATUS_SAVING;
			},
			isSuccess() {
				return this.currentStatus === STATUS_SUCCESS;
			},
			isFailed() {
				return this.currentStatus === STATUS_FAILED;
			}
		},
		methods: {
			reset() {
				// reset form to initial state
				this.currentStatus = STATUS_INITIAL;
				this.uploadedFile = null;
				this.uploadError = null;
			},
			save(name, file) {
				// upload data to the server
				this.currentStatus = STATUS_SAVING;

				this.upload(name, file)
					.then(x => {
						this.uploadedFile = x;
						this.currentStatus = STATUS_SUCCESS;
					})
					.catch(err => {
						this.uploadError = err.response;
						this.currentStatus = STATUS_FAILED;
					});
			},
			filesChange(fieldName, fileList) {
				// handle file changes
				const formData = new FormData();

				if (!fileList.length) return;

				// append the files to FormData
				Array
					.from(Array(fileList.length).keys())
					.map(x => {
						formData.append(fieldName, fileList[x], fileList[x].name);
					});

				// save it
				this.save(formData);
			}
		},
		mounted() {
			this.reset();
		},
	}
</script>

<style scoped>
	form {
		width: 100%;
	}
  .dropbox {
		width: 100%;
		height: 90px;
    border: 1px solid grey; /* the dash box */
    /* outline-offset: -10px; */
    /* background: lightcyan; */
    color: dimgray;
    padding: 10px 10px;
    /* min-height: 200px; /* minimum height */ */
    position: relative;
    cursor: pointer;
		border-radius: 0.25rem;
  }

	.success {
		background-color: #32d186;
	}

	.failed {
		background-color: #f7604c;
	}

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 100%;
    position: absolute;
		left: 0;
		top: 0;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    /* padding: 50px 0; */
  }
</style>
