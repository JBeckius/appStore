<template>
	<div class="col-auto my-1">
		<div class="form-check">
			<input v-bind:value="value"
						 v-on:input="$emit('input', $event.target.checked)"
						 class="form-check-input"
						 type="checkbox"
						 :name="name"
						 :checked="checked"
			>
			<label class="form-check-label" :for="name">
				{{ label }}
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'checkbox',
		props: ['value', 'name', 'label', 'checked']
	}
</script>

<style scoped>
</style>
