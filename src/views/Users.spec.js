import { expect } from 'chai';
import {mount, shallowMount, localVue} from '@vue/test-utils';
import Users from './Users.vue';

describe('Users.vue', ()=>{
	it('should mount', ()=>{
		let wrapper = shallowMount(Users);
		expect(wrapper).to.not.be.null;
	})
});
