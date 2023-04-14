const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const ETW_Instance = new ExtractTextWebpackPlugin('style.css');
    return {
        entry: './src/app.js',
        // entry: './src/playground-files/appTwo.js',
        // entry: './src/playground-files/appEleven.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
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
                use: ETW_Instance.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            ETW_Instance
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        // devtool: 'cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}