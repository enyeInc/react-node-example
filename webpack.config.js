const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'sass-loader',
                ],
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    chunks: 'all',
                    enforce: true,
                    name: 'styles',
                    test: /\.css$/,
                },
            },
        },
    },
    output: {
        chunkFilename: "[id].[hash].js",
        filename: "[name].[hash].js",
        path: `${__dirname}/dist`,
    },
    performance: {
        hints: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            filename: devMode ? '[name].css' : '[name].[hash].css',
        }),
    ],
    target: 'web',
};
