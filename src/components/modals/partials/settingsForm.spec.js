import { expect, spy } from 'chai';
import sinon from 'sinon';
import {mount, shallowMount, localVue} from '@vue/test-utils';
import SettingsForm from './settingsForm.vue';

describe('settingsInfo.vue', ()=>{
	let wrapper;

	let appData = {
		"applicationId": 12,
		"applicationName": "App Name 1",
		"bundleId": "Bundle Id 1",
		"description": "This is an awesome app",
		"subdirectory": {
			"id": 0,
			"type": 0
		},
		"dateStart": "2018-07-10T13:24:48.3363011-04:00",
		"dateEnd": "2018-08-10T13:24:48.3363011-04:00",
		"createTimestamp": "2017-07-10T13:24:48.3363011-04:00",
		"lastUpdated": "2018-01-10T13:24:48.3363011-05:00",
		"visible": true,
		"downloadEnabled": true,
		"image": {
			"id": 1,
			"name": "App 1 image",
			"path": "/Path/image.png",
			"dateUploaded": "2017-07-10T13:24:48.3363011-04:00",
			"fileSize": 10,
			"applicationId": 0
		},
		"versions": [
			{
				"id": 1,
				"name": "Exe Name",
				"path": "../path/to/file.ipa",
				"version": "1",
				"dateUploaded": "2018-07-10T13:24:48.3363011-04:00",
				"bundleId": "Bundle ID",
				"fileSize": 1024,
				"downloadEnabled": 1,
				"applicationId": 7734
			},
			{
				"id": 2,
				"name": "Exe Name 2",
				"path": "../path/to/file.apk",
				"version": "2",
				"dateUploaded": "2018-06-10T13:24:48.3363011-04:00",
				"bundleId": "Bundle ID 2",
				"fileSize": 2048,
				"downloadEnabled": 0,
				"applicationId": 5532
			},
			{
				"id": 2,
				"name": "Exe Name 3",
				"path": "../path/to/file1.ipa",
				"version": "5",
				"dateUploaded": "2018-06-28T13:24:48.3363011-04:00",
				"bundleId": "Bundle ID 3",
				"fileSize": 1,
				"downloadEnabled": 1,
				"applicationId": 96
			}
		],
		"versionIds": [],
		"groups": [
			{
				"id": 1,
				"name": "Admin",
				"type": 1,
				"dateCreated": "2017-07-10T13:24:48.3363011-04:00"
			},
			{
				"id": 2,
				"name": "User",
				"type": 2,
				"dateCreated": "2018-01-10T13:24:48.3363011-05:00"
			}
		],
		"groupIds": []
	};

	beforeEach(()=> {
		let updateSpy = sinon.spy();
		let closeSpy = sinon.spy();
		wrapper = shallowMount(SettingsForm, {
			propsData: {
				appData,
				update: updateSpy,
				close: closeSpy,
				isAdmin: true
			}
		});

	});

	it('should have appData', ()=>{
		expect(wrapper.vm.appData.applicationName).to.equal(appData.applicationName);
	})
	//it('should show update btn when admin')
	it('should show update btn when admin', ()=>{
		let updateSpy = sinon.spy();
		let closeSpy = sinon.spy();
		let wrapper = shallowMount(SettingsForm, {
			propsData: {
				appData,
				update: spy,
				isAdmin: true,
				close: closeSpy
			}
		})
		let submitBtn = wrapper.find('button.formSubmit');

		// console.log(spy);
		expect(submitBtn.is('button')).to.be.true;

	})

	it('should not show update btn when not admin', ()=>{
		let updateSpy = sinon.spy();
		let closeSpy = sinon.spy();
		let wrapper = shallowMount(SettingsForm, {
			propsData: {
				appData,
				update: updateSpy,
				isAdmin: false,
				close: closeSpy
			}
		})
		let submitBtns = wrapper.findAll('button.formSubmit');

		expect(submitBtns.length).to.equal(0);

	});

	// it('should call update when submit is clicked', ()=>{
	// 	let submitBtn = wrapper.find('button.formSubmit');
	// 	submitBtn.trigger('click');
	// 	// wrapper.vm.update();
	// 	console.log(wrapper.emitted());
	// 	expect(updateSpy).to.not.be.null;
	// })

});
