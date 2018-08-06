import { expect, spy } from 'chai';
import sinon from 'sinon';
import {mount, shallowMount, localVue} from '@vue/test-utils';
import SettingsForm from './settingsForm.vue';

describe('settingsInfo.vue', ()=>{
	let wrapper;

	let appData = {
		"dateStart": "2018-07-10T13:24:48.3363011-04:00",
		"dateEnd": "2018-08-10T13:24:48.3363011-04:00",
		"visible": true,
		"downloadEnabled": true
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
