<template>
  <div id="app">
    <div v-if="currentRoute !== 'login'"id="nav">
      <!--<router-link to="/home">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->
			<router-link to="/">Directory</router-link> |
			<span v-if="isAdmin"><router-link v-if="isAdmin" to="/uploadApp">App</router-link> | </span>
			<!-- <span v-if="isAdmin"><router-link v-if="isAdmin" to="/configMapping">Config Mapping</router-link> | </span> -->
			<span v-if="isAdmin"><router-link v-if="isAdmin" to="/users">Users</router-link> | </span>
			<a class="logout" v-on:click="logout"> Logout</a>
    </div>
    <router-view/>
		<Loading :show="showLoading"/>
  </div>
</template>

<script>
	import Loading from 'vue-full-loading';
	export default {
		name: 'App',
		components: {Loading},
		methods: {
			logout(){
				localStorage.removeItem('access_token');
				localStorage.removeItem('expires_in');
				location.reload();
			}
		},
		computed: {
			isAdmin() {
				return this.$store.getters.isAdmin;
			},
			currentRoute() {
				return this.$route.name;
			},
			showLoading() {
				return this.$store.state.loading;
			}
		}
	}
</script>

<style>
body {
	width: 100%;
	padding-bottom: 20px;
}
.row {
	margin: 0 !important;
}
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
