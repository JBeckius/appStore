import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Directory from './views/Directory.vue'
import UploadApp from './views/UploadApp.vue'
import DownloadReport from './views/DownloadReport.vue'
import ConfigMapping from './views/ConfigMapping.vue'

Vue.use(Router)

export default new Router({
	base: '/app',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
		{
			path: '/directory',
			name: 'directory',
			component: Directory
		},
		{
			path: '/uploadApp',
			name: 'uploadApp',
			component: UploadApp
		},
		{
			path: '/downloadReport',
			name: 'downloadReport',
			component: DownloadReport
		},
		{
			path: '/configMapping',
			name: 'configMapping',
			component: ConfigMapping
		}
  ]
})
