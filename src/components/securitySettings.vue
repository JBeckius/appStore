<template>
	<div class="card">
		<h5 class="card-header">Security Settings</h5>
		<div class="card-body">
			<div class="form-row">
				<div class="form-group col-md-4 my-1">
					<select v-model="clientId" class="form-control" id="clients" name="clients" required>
						<option :value="{}" class="dropDownPlaceHolder">Select Client</option>
						<option v-if="clients" v-for="client in clients" :value="client.id">{{client.clientName}}</option>
					</select>
					<div class="d-none" id="curcli">

													</div>
					<div class="invalid-feedback">
						Please select a client.
					</div>
				</div>
				<div class="form-group col-md-4 my-1">
					<DatePicker class="datePicker form-control" v-model="dateStart" placeholder="Start Date"/>
					<!-- <label class="sr-only" for="startDate">Start Date</label>
					<input type="text" class="form-control" name="dateStart" id="dateStart"
								 placeholder="Start Date"> -->
				</div>
				<div class="form-group col-md-4 my-1">
					<DatePicker class="datePicker form-control" v-model="dateEnd" placeholder="End Date"/>
					<!-- <label class="sr-only" for="endDate">End Date</label>
					<input type="text" class="form-control" name="dateEnd" id="dateEnd"
								 placeholder="End Date"> -->
				</div>
			</div>
			<div class="form-row align-items-center">
				<div class="col-auto my-1">
					<div class="form-check">
						<input v-model="disablePreviousVersion" class="form-check-input" type="checkbox" id="disablePreviousVersion" name="disablePreviousVersion">
						<label class="form-check-label" for="disablePreviousVersion">
							Disable Previous Version
						</label>
					</div>
				</div>
				<div class="col-auto my-1">
					<div class="form-check">
						<input v-model="visible" class="form-check-input" type="checkbox" id="visible" name="visible" checked>
						<label class="form-check-label" for="visible">
							Visible within Directory
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DatePicker from 'vuejs-datepicker';

	export default {
		name: 'securitySettings',
		components: {DatePicker},
		props: ['update'],
		data() {
			return {
				disablePreviousVersion: false,
				dateStart: null,
				dateEnd: null,
				visible: true,
				clientId: null
			}
		},
		computed: {
			clients() {
				return this.$store.state.clients;
			},
			formData() {
				let formData = {
					disablePreviousVersion: this.disablePreviousVersion,
					dateStart: this.dateStart,
					dateEnd: this.dateEnd,
					visible: this.visible,
					clientId: this.clientId
				}
				return formData;
			}
		},
		methods: {
			updateStart(date) {
				console.log('new start date: ', date);
			}
		},
		watch: {
			dateStart() {
				this.update(this.formData);
			},
			dateEnd() {
				this.update(this.formData);
			},
			visible() {
				this.update(this.formData);
			},
			disablePreviousVersion() {
				this.update(this.formData);
			},
			clientId() {
				this.update(this.formData);
			}
		}
	}
</script>

<style>
	.datePicker {
		/* width: 300px; */
	}

	.datePicker input {
		width: 100%;
		border: 0;
	}
</style>
