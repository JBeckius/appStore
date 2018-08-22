import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Directory from './views/Directory.vue'
import UploadApp from './views/UploadApp.vue'
// import DownloadReport from './views/DownloadReport.vue'
// import ConfigMapping from './views/ConfigMapping.vue'
import Users from './views/Users.vue';
import Login from './views/Login.vue'
import Store from './store/store.js'

Vue.use(Router)

let router =  new Router({
	base: '/app',
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	component: About
		// },
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				guest: true
			}
		},
		{
			path: '/',
			name: 'directory',
			component: Directory,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/uploadApp',
			name: 'uploadApp',
			component: UploadApp,
			meta: {
				requiresAuth: true
			}
		},
		// {
		// 	path: '/downloadReport',
		// 	name: 'downloadReport',
		// 	component: DownloadReport,
		// 	meta: {
		// 		requiresAuth: true
		// 	}
		// },
		// {
		// 	path: '/configMapping',
		// 	name: 'configMapping',
		// 	component: ConfigMapping,
		// 	meta: {
		// 		requiresAuth: true
		// 	}
		// },
		{
			path: '/users',
			name: 'users',
			component: Users,
			meta: {
				requiresAuth: true
			}
		}


  ]
})

router.beforeEach((to, from, next) => {
		console.log(Store.state.user.role);
    if(to.matched.some(record => record.meta.requiresAuth)
			// && process.env.VUE_APP_DEBUG === false
		) {
        if (localStorage.getItem('access_token') == null) {


            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else if(Store.state.user.role == null) {
					console.log('hit me there');
					return Store.dispatch('authenticate')
						.then(()=>{
							return Store.dispatch('updateAllAppData')

						})
						.then(()=>{
							next()
						})
				} else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
							Store.dispatch('updateAllAppData')
								.then(()=> {
									next()
								})
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('access_token') == null){
            next()
        }
				else if(Store.state.user.role == null) {
										console.log('hit me here');
					Store.dispatch('updateAllAppData')
						.then(()=>{
							next()
						})
				}
        else{
            next({ name: 'userboard'})
        }
    }else {
			if(Store.state.user.role == null) {
									console.log('hit me harder');
				Store.dispatch('authenticate')
					.then(()=>{
						return Store.dispatch('updateAllAppData')

					})
					.then(()=> next())
			}
			console.log('hitting here');
        next()
    }
})

export default router;
