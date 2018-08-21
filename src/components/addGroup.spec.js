import { expect } from 'chai';
import {mount, shallowMount} from '@vue/test-utils';
import AddGroup from './addGroup.vue';

describe('addGroup.vue', ()=>{
	it('mounts', ()=>{
		const wrapper = shallowMount(AddGroup);
		expect(wrapper).to.not.be.null;
	});


})
