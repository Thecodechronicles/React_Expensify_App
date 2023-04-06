const path = require('path');

module.exports = {
    entry: './src/app.js',
    // entry: './src/playground-files/appTwo.js',
    // entry: './src/playground-files/appEleven.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        // devtoolModuleFilenameTemplate: 'file:///[resource-path]'
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
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