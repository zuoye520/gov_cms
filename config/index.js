// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
//zuozuo 修改动态路径问题
var constants = require("../src/utils/constants.js");
module.exports = {
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: '',
		assetsPublicPath: constants.contextPublic + '/',
		productionSourceMap: false,
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css']
	},
	dev: {
		env: require('./dev.env'),
		port: 8080,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
//			'/xhlc/api/a/list/': {
//				target: 'http://nniao.oicp.net/site',
//				changeOrigin: true,
//				pathRewrite: {
//					'^/xhlc/api/a/list/': '/xhlc/api/a/list/'
//				}
//			}
		},
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false
	}
}
