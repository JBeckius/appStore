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
					<SettingsInfo :appData="appData" :showVersions="showVersions"/>
					<div v-if="!isAdmin" class="alert alert-primary" role="alert">
						<i class="fa fa-info-circle"></i> Please contact an administrator to change any of these settings
					</div>
					<SettingsForm :isAdmin="isAdmin"
												:close="close"
												:appData="formData"
												:update="update"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import apiManager from '../../api/apiManager.js';
	import modalMixin from './appModalMixin.js';
	import DatePicker from 'vuejs-datepicker';
	import SettingsInfo from './partials/settingsInfo.vue';
	import SettingsForm from './partials/settingsForm.vue';

	export default {
		name: 'settingsModal',
		mixins: [modalMixin],
		components: {DatePicker, SettingsInfo, SettingsForm},
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
		computed: {
			isAdmin() {
				return this.$store.getters.isAdmin ;
			},
			formData() {
				return {
					name: this.appData.groups[0].name,
					dateStart: this.appData.dateStart,
					dateEnd: this.appData.dateEnd,
					visible: this.appData.visible,
					downloadEnabled: this.appData.downloadEnabled
				}
			}
		},
		methods: {
			update(updates) {

				return apiManager.apps.update(this.appData, updates)
				.then(()=>{
					return this.$store.dispatch('updateApps');
				});
			}
		}
	}
</script>

<style scoped>
	.settingsModal {
		position: fixed;
		top: 0;
		left: 0;
		width: 80%;
		margin: 0 10%;
		height: 100%;
	}
</style>
