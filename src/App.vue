<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
			<router-link to="/">Directory</router-link> |
			<span v-if="isAdmin"><router-link v-if="isAdmin" to="/uploadApp">Upload App</router-link> | </span>
			<span v-if="isAdmin"><router-link v-if="isAdmin" to="/configMapping">Config Mapping</router-link> | </span>
			<a class="logout" v-on:click="logout"> Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
	export default {
		name: 'App',
		methods: {
			logout(){
				localStorage.removeItem('access_token');
				localStorage.removeItem('expires_in');
				this.$router.push('login');
			}
		},
		computed: {
			isAdmin() {
				return this.$store.getters.isAdmin;
			}
		}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
