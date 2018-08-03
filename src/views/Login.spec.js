import { expect } from 'chai';
import {mount, shallowMount, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import Login from './Login.vue';
import flushPromises from 'flush-promises';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Login.vue', () => {

	let store;

	let actions = {
		updateUserRole(state) {
			state.user.role = 'updated';
		}
	};
	let mutations = {
		authenticate({commit}) {
			commit('updateUserRole');
		}
	};

	beforeEach(()=> {
		store = new Vuex.Store({
			state: {
				user: {
					role: 'bop'
				}
			},
			actions,
			mutations

		});
	});


	it('exists', () => {
		const wrapper = shallowMount(Login);
		expect(wrapper).to.not.be.null;
	});

	it('has two entry fields', () => {
		const wrapper =shallowMount(Login);
		expect(wrapper.findAll('input').length).to.equal(2).but.not.equal(3);
	});

	it('has a submit btn', () => {
		const wrapper = shallowMount(Login);
		expect(wrapper.find('button')).to.be.an('object');
	});

	it('should link username form to username data', () => {
		const wrapper = shallowMount(Login);
		let form = wrapper.find('#username').setValue('abcd');
		expect(wrapper.vm.username).to.equal('abcd').but.not.equal('efgh');


	});

	it('should link password form to password data', () => {
		const wrapper = shallowMount(Login);
		let form = wrapper.find('#password').setValue('1234');
		expect(wrapper.vm.password).to.equal('1234').but.not.equal('5678');
	});

});
