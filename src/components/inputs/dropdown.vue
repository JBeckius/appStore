<template>
	<div class="form-group col-md-4 my-1">
		<select v-bind:value="value"
		 				v-on:input="$emit('input', $event.target.value)"
						class="form-control"
						id="clients"
						:name="name"
						required
		>
			<option :value="{}" class="dropDownPlaceHolder">{{placeholder}}</option>
			<option v-if="options" v-for="(option, index) in options" :value="option[optionValue]" :key="index">{{option[optionDisplay]}}</option>
		</select>
		<div class="d-none" id="curcli"></div>
		<div class="invalid-feedback">
			{{ placeholder }}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'dropdown',
		props: ['value', 'options', 'optionValue', 'optionDisplay', 'placeholder', 'name']
	}
</script>

<style scoped>
</style>
