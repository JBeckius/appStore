const webpack = require('webpack');
module.exports = {
	baseUrl: process.env.VUE_APP_BASE_URL,
  lintOnSave: true,
  configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				'BASE_API_URL': process.env.VUE_APP_BASE_API_URL,
				'BASE_CDN_URL': process.env.VUE_APP_BASE_CDN_URL
			})
		]
  }
};
