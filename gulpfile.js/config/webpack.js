var path = require('path');
var paths = require('./');
var webpack = require('webpack');

module.exports = function (env) {
    var jsSrc = path.resolve(paths.assetDirectory + '/JavaScript/');
    var jsDest = paths.publicDirectory + '/JavaScript/';

    var webpackConfig = {
        context: jsSrc,

        plugins: [],

        resolve: {
            extensions: ['', '.js', '.coffee'],
            root: [
                path.resolve(paths.assetDirectory + '/JavaScript/'),
                path.resolve(paths.bowerDirectory)
            ]
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader?stage=1',
                    exclude: /node_modules/
                },
                {
                    test: /\.coffee$/,
                    loader: "coffee-loader",
                    exclude: /node_modules/,
                }
            ]
        },

        entry: {
            site: ['./site.js']
        },

        output: {
            path: jsDest,
            filename: '[name].js'
        },

        externals: {
            jquery: 'jQuery' // require("jquery") is external and available on the global var jQuery
        }
    };

    if (env === 'development') {
        webpackConfig.devtool = 'source-map';
        webpack.debug = true;
    }

    if (env === 'production') {
        webpackConfig.plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.NoErrorsPlugin()
        );
    }

    return webpackConfig;
};
