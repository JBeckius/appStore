// import { expect } from 'chai';
// import {mount, shallowMount, createLocalVue} from '@vue/test-utils';
// import ConfigMapping from './ConfigMapping.vue';
// import Vuex from 'vuex';
//
// const localVue = createLocalVue();
//
// localVue.use(Vuex);
//
// describe('ConfigMapping.vue', () => {
// 	let store;
//
// 	beforeEach(()=>{
// 		store = new Vuex.Store({
// 			state: {
// 				apps: [{
// 						"applicationId": 12,
// 						"applicationName": "App Name 1",
// 						"bundleId": "Bundle Id 1",
// 						"description": "This is an awesome app",
// 						"subdirectory": {
// 							"id": 0,
// 							"type": 0
// 						},
// 						"dateStart": "2018-07-10T13:24:48.3363011-04:00",
// 						"dateEnd": "2018-08-10T13:24:48.3363011-04:00",
// 						"createTimestamp": "2017-07-10T13:24:48.3363011-04:00",
// 						"lastUpdated": "2018-01-10T13:24:48.3363011-05:00",
// 						"visible": true,
// 						"downloadEnabled": true,
// 						"image": {
// 							"id": 1,
// 							"name": "App 1 image",
// 							"path": "/Path/image.png",
// 							"dateUploaded": "2017-07-10T13:24:48.3363011-04:00",
// 							"fileSize": 10,
// 							"applicationId": 0
// 						},
// 						"versions": [
// 							{
// 								"id": 1,
// 								"name": "Exe Name",
// 								"path": "../path/to/file.ipa",
// 								"version": "1",
// 								"dateUploaded": "2018-07-10T13:24:48.3363011-04:00",
// 								"bundleId": "Bundle ID",
// 								"fileSize": 1024,
// 								"downloadEnabled": 1,
// 								"applicationId": 7734
// 							},
// 							{
// 								"id": 2,
// 								"name": "Exe Name 2",
// 								"path": "../path/to/file.apk",
// 								"version": "2",
// 								"dateUploaded": "2018-06-10T13:24:48.3363011-04:00",
// 								"bundleId": "Bundle ID 2",
// 								"fileSize": 2048,
// 								"downloadEnabled": 0,
// 								"applicationId": 5532
// 							},
// 							{
// 								"id": 2,
// 								"name": "Exe Name 3",
// 								"path": "../path/to/file1.ipa",
// 								"version": "5",
// 								"dateUploaded": "2018-06-28T13:24:48.3363011-04:00",
// 								"bundleId": "Bundle ID 3",
// 								"fileSize": 1,
// 								"downloadEnabled": 1,
// 								"applicationId": 96
// 							}
// 						],
// 						"versionIds": [],
// 						"groups": [
// 							{
// 								"id": 1,
// 								"name": "Admin",
// 								"type": 1,
// 								"dateCreated": "2017-07-10T13:24:48.3363011-04:00"
// 							},
// 							{
// 								"id": 2,
// 								"name": "User",
// 								"type": 2,
// 								"dateCreated": "2018-01-10T13:24:48.3363011-05:00"
// 							}
// 						],
// 						"groupIds": []
// 					},
// 					{
// 						"applicationId": 13,
// 						"applicationName": "App Name 2",
// 						"bundleId": "Bundle Id 2",
// 						"description": "This is an awesome app",
// 						"subdirectory": {
// 							"id": 0,
// 							"type": 0
// 						},
// 						"dateStart": "2018-07-10T13:24:48.3363011-04:00",
// 						"dateEnd": "2018-08-10T13:24:48.3363011-04:00",
// 						"createTimestamp": "2017-07-10T13:24:48.3363011-04:00",
// 						"lastUpdated": "2018-01-10T13:24:48.3363011-05:00",
// 						"visible": true,
// 						"downloadEnabled": true,
// 						"image": {
// 							"id": 1,
// 							"name": "App 2 image",
// 							"path": "/Path/image.png",
// 							"dateUploaded": "2017-07-10T13:24:48.3363011-04:00",
// 							"fileSize": 10,
// 							"applicationId": 0
// 						},
// 						"versions": [
// 							{
// 								"id": 1,
// 								"name": "Exe Name",
// 								"path": "../path/to/file.ipa",
// 								"version": "1",
// 								"dateUploaded": "2018-07-10T13:24:48.3363011-04:00",
// 								"bundleId": "Bundle ID",
// 								"fileSize": 1024,
// 								"downloadEnabled": 1,
// 								"applicationId": 7734
// 							},
// 							{
// 								"id": 2,
// 								"name": "Exe Name 2",
// 								"path": "../path/to/file.apk",
// 								"version": "2",
// 								"dateUploaded": "2018-06-10T13:24:48.3363011-04:00",
// 								"bundleId": "Bundle ID 2",
// 								"fileSize": 2048,
// 								"downloadEnabled": 0,
// 								"applicationId": 5532
// 							},
// 							{
// 								"id": 2,
// 								"name": "Exe Name 3",
// 								"path": "../path/to/file1.ipa",
// 								"version": "5",
// 								"dateUploaded": "2018-06-28T13:24:48.3363011-04:00",
// 								"bundleId": "Bundle ID 3",
// 								"fileSize": 1,
// 								"downloadEnabled": 1,
// 								"applicationId": 96
// 							}
// 						],
// 						"versionIds": [],
// 						"groups": [
// 							{
// 								"id": 1,
// 								"name": "Admin",
// 								"type": 1,
// 								"dateCreated": "2017-07-10T13:24:48.3363011-04:00"
// 							},
// 							{
// 								"id": 2,
// 								"name": "User",
// 								"type": 2,
// 								"dateCreated": "2018-01-10T13:24:48.3363011-05:00"
// 							}
// 						],
// 						"groupIds": []
// 					}],
// 				clients: [
// 					{
// 						clientName: 'Bob',
// 						id: '123'
// 					},
// 					{
// 						clientName: 'Joe',
// 						id: '456'
// 					}
// 				]
// 			}
// 		})
// 	})
// 	it('mounts', () => {
// 		const wrapper = shallowMount(ConfigMapping, { store, localVue });
// 		// expect(wrapper).to.not.be.null;
// 	})
// })
