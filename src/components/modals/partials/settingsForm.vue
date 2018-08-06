<template>
	<form id="settingsForm" @submit.prevent="submit">
		<div class="form-row">
			<div class="form-group col-md-6">
				<div class="form-check">
					<input v-model="visible" class="form-check-input" type="checkbox" name="visible" id="visible"
								 :checked="visible" :disabled="!isAdmin">
					<label class="form-check-label" for="visibleInDirectory">
						Visible in Directory
					</label>
				</div>
				<div class="form-check">
					<input v-model="downloadEnabled" class="form-check-input" type="checkbox" name="downloadEnabled" id="downloadEnabled"
								 :checked="downloadEnabled ? false : true" :disabled="!isAdmin">
					<label class="form-check-label" for="downloadEnabled">
						Download Enabled
					</label>
				</div>
				<p>Subdirectory: {{subdirectoryName}}</p>
			</div>
			<div class="form-group col-md-6">
				<div class="form-row">
					<div class="col-md-6 my-1">
						<label class="sr-only" for="settingsModalStartDate">Start Date</label>
						<DatePicker class="datePickerSettings" v-model="dateStart" placeholder="Start Date" typeable :disabled="!isAdmin"/>

					</div>
					<div class="col-md-6 my-1">
						<label class="sr-only" for="settingsModalEndDate">End Date</label>
						<DatePicker class="datePickerSettings" v-model="dateEnd" placeholder="End Date" typeable :disabled="!isAdmin"/>
						<small id="endDateHelp" class="form-text text-muted">If blank, never expires</small>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-footer">
			<span class="m-auto">
				<button type="button" class="btn btn-secondary closeModal" data-dismiss="modal" v-on:click="close">Cancel</button>
				<button v-if="isAdmin" type="submit" class="btn btn-primary formSubmit">Update</button>
			</span>
		</div>
	</form>
</template>

<script>
	import DatePicker from 'vuejs-datepicker';
	export default {
		name: 'settingsForm',
		components: {DatePicker},
		props: ['update', 'close', 'isAdmin', 'appData'],
		data() {
			return {
				dateStart: this.appData.dateStart,
				dateEnd: this.appData.dateEnd,
				visible: this.appData.visible,
				downloadEnabled: this.appData.downloadEnabled
			}
		},
		computed: {
			subdirectoryName() {
				let subdirectory = this.appData.subdirectory;
				return subdirectory && subdirectory.name ? subdirectory.name : 'none';
			}
		},
		methods: {
			submit(e) {
				// e.preventDefault();

				return this.update({dateStart: this.dateStart,
														dateEnd: this.dateEnd,
														visible: this.visible,
														downloadEnabled: this.downloadEnabled
				});
			}
		}
	}
</script>

<style>
	.datePickerSettings {
		width: 100%;
		padding: 0;
	}

	.datePickerSettings div input {
		width: 100%;
	}
</style>
