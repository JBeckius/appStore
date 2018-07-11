<template>
	<div class="container loginFormContainer">
	<div class="w-50 mx-auto mb-4">
		<img class="mx-auto d-block img-fluid" src="JD_logo.jpg" alt="Jackson Dawson Logo"/>
	</div>
	<form id="loginForm" method="post" novalidate>
		<div class="input-group mb-3">
			<input v-model="username" type="text" class="form-control" id="username" name="username" placeholder="Username" required>
			<div class="input-group-append">
				<span class="input-group-text"><i class="fas fa-user"></i></span>
			</div>
			<div class="invalid-feedback">
				Please enter a username.
			</div>
		</div>
		<div class="input-group mb-3">
			<input v-model="password" type="password" class="form-control" id="password" name="password" placeholder="Password" required />
			<div class="input-group-append">
				<span class="input-group-text"><i class="fas fa-key"></i></span>
			</div>
			<div class="invalid-feedback">
				Please enter a password.
			</div>
		</div>
		<div class="loginErrorMsg"></div>
	</form>
	<button type="button" v-on:click="getAuthorized" class="btn btn-primary btn-center">Submit</button>
</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				password: null,
				username: null
			}
		},
		methods: {
			getAuthorized() {
				this.$store.dispatch('getAccessToken', {username: this.username, password: this.password})
					.then()
					.catch(err => console.log('did not get authed: ', err));
			}
		}
	}
</script>
