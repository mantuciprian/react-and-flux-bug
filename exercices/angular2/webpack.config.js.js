var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './greeter.ts',
    output: {
        filename: 'greeter.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        loaders: [ {
            test: /\.ts$/ ,
            include: path.resolve(__dirname, 'ts-src'),
            loader: 'ts-loader'
        } ]
    },
    resolve: {
        extensions:[ ".webpack.js", ".web.js", ".ts", ".js" ]
    }
};﻿