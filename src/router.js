import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Directory from './views/Directory.vue'
import UploadApp from './views/UploadApp.vue'
import DownloadReport from './views/DownloadReport.vue'
import ConfigMapping from './views/ConfigMapping.vue'
import Login from './views/Login.vue'

Vue.use(Router)

let router =  new Router({
	base: '/app',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				guest: true
			}
		},
    {
      path: '/about',
      name: 'about',
      component: About
    },
		{
			path: '/directory',
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
		{
			path: '/downloadReport',
			name: 'downloadReport',
			component: DownloadReport,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/configMapping',
			name: 'configMapping',
			component: ConfigMapping,
			meta: {
				requiresAuth: true
			}
		}
  ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('access_token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
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
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('access_token') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next()
    }
})

export default router;
