import Vue from 'vue'
import Vuex from 'vuex'
import apiManager from '../api/apiManager.js';
import Router from '../router.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		user: {
			role: null
		},
		apps: [
			{
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
			},
			{
				"applicationId": 13,
				"applicationName": "App Name 2",
				"bundleId": "Bundle Id 2",
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
					"name": "App 2 image",
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
			},
			{
				"applicationId": 14,
				"applicationName": "App Name 3",
				"bundleId": "Bundle Id 3",
				"description": "This is an awesome app",
				"subdirectory": {
					"id": 0,
					"type": 0
				},
				"dateStart": "2018-08-10T13:24:48.3363011-04:00",
				"dateEnd": "2018-09-10T13:24:48.3363011-04:00",
				"createTimestamp": "2017-07-10T13:24:48.3363011-04:00",
				"lastUpdated": "2018-01-10T13:24:48.3363011-05:00",
				"visible": true,
				"downloadEnabled": true,
				"image": {
					"id": 1,
					"name": "App 3 image",
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
			}
		],
		subdirectories: [
			{
				id: 1,
				name: 'sub1'
			},
			{
				id: 2,
				name: 'sub2'
			}
		],
		groups: [],
		clients: [
			{
				clientName: 'Bob',
				id: '123'
			},
			{
				clientName: 'Joe',
				id: '456'
			}
		],
		accessToken: null
  },
	getters: {
		isAdmin(state) {
			return state.user.role === 'Admin' ? true : false;
		},
		accessToken(state) {
			let localToken = localStorage.getItem('access_token');
			return localToken ? localToken : state.accessToken;
		}
	},
  mutations: {
		updateApps(state, apps) {
			if(apps.length > 0) state.apps = apps;
		},
		updateGroups(state, groups) {
			state.groups = groups;
		},
		addGroup(state, group) {
			state.groups = [...state.groups, group]
		},
		updateClients(state, clients) {
			state.clients = clients;
		},
		updateSubdirectories(state, subdirectories) {
			state.subdirectories = subdirectories;
		},
		setAccessToken(state, token) {
			state.accessToken = token;
			apiManager.setAuthDefault(token);
		},
		setUserRole(state, role) {
			state.user = {
				role
			}
		}
  },
  actions: {
		authenticate({ commit, dispatch }, creds) {
			return dispatch('getAccessToken', creds)
				.then(() =>{
					return dispatch('getUserRole')
				})
				// .then(resp => {
				// 	//apiManager.user.getUsername(resp=>console.log('username: ', resp));
				// 	console.log('authenticated');
				// 	return dispatch('updateAllAppData');
				// })
				.catch('failed to auth');
		},
		getToken({ commit }) {

		},
		getUserRole({ commit }) {
			return apiManager.user.getUserRole()
				.then(resp => {
					//TODO set user role properly
					console.log('getUserRole: ', resp.data);
					return commit('setUserRole', resp.data)
				})
				.catch(err => {
					console.log('user role fail: ', err);
					localStorage.removeItem('access_token');
					location.reload();
				});
		},

		updateApps({ commit }) {
			return apiManager.apps.getAll()
				.then(resp => {
					commit('updateApps', resp.data);
					console.log('gotApps: ', resp);
				})
				.catch(err => console.log('got no apps: ', err))
		},
		updateGroups({ commit }) {
			return apiManager.groups.getAll()
				.then(resp => {
					let groups = resp.data;
					commit('updateGroups', groups);
					console.log('got groups: ', groups);
				})
				.catch(err=> console.log('did not get groups: ', err));
		},
		updateClients({ commit }) {
			return apiManager.clients.getAll()
				.then(resp => {
					let clients = resp.data;
					commit('updateClients', clients);
				})
				.catch(err=> console.log('did not get clients: ', err));
		},
		addGroup({ commit }, group) {
			return apiManager.groups.post(group)
				.then(resp => {
					let respGroup = resp.data;
					commit('addGroup', respGroup);
				})
		},
		updateSubdirectories({ commit }) {
			return apiManager.subdirectories.getAll()
				.then(resp => {
					let subdirectories = resp.data;
					commit('updateSubdirectories', subdirectories);
				})
				.catch(err => console.log('did not get subdirectories: ', err))
		},
		getAccessToken({ commit, dispatch }, creds) {
			// check for local token
			let localToken = localStorage.getItem('access_token');
			if(localToken) return commit('setAccessToken', localToken);
			// if no local token, request new token
			return apiManager.Token.getToken(creds)
			.then(resp => {
				let token = resp.data.access_token;
				localStorage.setItem('access_token', token);

				return commit( 'setAccessToken', token );
			})

		},
		updateAllAppData({ commit, dispatch }) {
			let updates = ['updateApps', 'updateGroups', 'updateSubdirectories'];
			// let promises = updates.map(update => dispatch(update));
			dispatch('updateApps')
				.then(()=> dispatch('updateGroups'))
				.then(()=>dispatch('updateSubdirectories'))
				.then(()=>dispatch('updateClients'))
				.then(resps => console.log('updates done: ', resps))
				.catch(err=> {

				});
			// console.log('promises: ', promises);
			// return Promise.all(promises)
			// 	.then(resps => console.log('updates done: ', resps))
			// 	.catch(err => console.log('not all updates succeeded: ', err));
		}
  }
})
