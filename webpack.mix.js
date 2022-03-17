const mix = require('laravel-mix');

mix.setPublicPath("./assets/");

mix.options({
    processCssUrls: false
});

if(mix.inProduction()){
    mix.version();
}
else{
	mix.sourceMaps();
	mix.webpackConfig({
		devtool: "inline-source-map"
	});
}

mix.browserSync({
    open: "external",
    online: true,
    port: 3005,
    proxy: "localhost/" + __dirname.split("www")[1]
});


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('dev/js/main.js', 'js')
    .sass('dev/scss/main.scss', 'css');