import { expect } from 'chai';
import {mount, shallowMount} from '@vue/test-utils';
import ClientConfig from './clientConfig.vue';

describe('clientConfig.vue', ()=>{
	it('mounts', ()=>{
		const wrapper = shallowMount(ClientConfig);
		expect(wrapper).to.not.be.null;
	})
})
