const path = require('path');
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const pluginObject = new ExtractTextWebpackPlugin('style.css');

// // console.log('ExtractTextWebpackPlugin_extract() : ', ExtractTextWebpackPlugin.extract({ use: ['css-loader', 'sass-loader'] }));
// // console.log('ExtractTextWebpackPlugin_new ExtractTextWebpackPlugin() : ', new ExtractTextWebpackPlugin('style.css'));

// console.log('ExtractTextWebpackPlugin_extract() : ', pluginObject.extract({ use: ['css-loader', 'sass-loader'] }));
// console.log('ExtractTextWebpackPlugin_new ExtractTextWebpackPlugin() : ', pluginObject);

module.exports = {
    entry: './src/app.js',
    // entry: './src/playground-files/appTwo.js',
    // entry: './src/playground-files/appEleven.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        // devtoolModuleFilenameTemplate: 'webpack:///[resource-path]'
        devtoolModuleFilenameTemplate: 'file:///[absolute-resource-path]'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'source-map',
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}