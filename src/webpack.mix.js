const mix = require('laravel-mix');
const webpack = require('webpack')

mix.js('./resources/js/app_v1.js', './public/js')
    .vue()
    .sass('./resources/scss/app_v1.scss', './public/css')
    .version()

mix.sass('./resources/admin/scss/azia.scss', './public/admin/css')
    .js('./resources/admin/js/azia.js', './public/admin/js')
    .version()

// mix.js('./resources/telegram/js/app.js', './public/telegram/js')
//     .sass('./resources/telegram/scss/app.scss', './public/telegram/css')

// mix.js('./resources/auth/js/app.js', './public/auth/js')
//     .sass('./resources/auth/scss/app.scss', './public/auth/css')

mix.disableNotifications();
mix.copyDirectory('./resources/img', './public/img');
mix.copyDirectory('./resources/sounds', './public/sounds');

if( !mix.inProduction() ) {
    mix.webpackConfig({
        devtool:"inline-source-map",
    });
    mix.sourceMaps();
}

mix.webpackConfig ({
    plugins: [
        new webpack.DefinePlugin({
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
        }),
    ],
})

if(mix.inProduction() ) {
    // mix.minify('./public/css/app.css');
    mix.version();
}
