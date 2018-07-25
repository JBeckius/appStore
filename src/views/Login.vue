<template>
	<div class="container loginFormContainer">
	<div class="w-50 mx-auto mb-4">
		<img class="mx-auto d-block img-fluid" src="JD_logo.jpg" alt="Jackson Dawson Logo"/>
	</div>
	<form id="loginForm" @submit="getAuthorized" method="post">
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
		<button type="submit" class="btn btn-primary btn-center">Submit</button>
	</form>
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
			getAuthorized(e) {
				e.preventDefault();

				let creds = {
					username: this.username,
					password: this.password
				};
				this.$store.dispatch('authenticate', creds)
					.then(resp => {
						this.$router.push('/');
					})
					.catch(err => console.log('did not get authed: ', err));
			}
		}
	}
</script>
