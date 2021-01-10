const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

/**
 * Base webpack configuration
 *
 * @param env -> env parameters
 * @param argv -> CLI arguments, 'argv.mode' is the current webpack mode (development | production)
 * @returns object
 */
module.exports = (env, argv) => {
    let isProd = (argv.mode === 'production');
    let prodPreprocessPlugins = {
        'autoprefixer': {},
        'cssnano': isProd === 'production' ? {} : false
    };

    return {
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            host: '127.0.0.1',
            port: 8080
        },
        entry: {
            vendor: path.resolve(__dirname, './src/vendor.js'),
            main: path.resolve(__dirname, './src/main.js'),
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                parallel: true,
            })],
            splitChunks: {
                chunks: 'all',
            },          
        },
        output: {
            filename: 'js/[name].bundle' + ( isProd ? '.[contenthash]' : '' ) + '.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '../'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ],
                },
                {
                    test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.webp$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'img',
                                esModule: false
                            }
                        },
                        { loader: 'image-webpack-loader' },
                    ]
                },
                {
                    test: /\.woff(2)?$|\.ttf$|\.eot$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                favicon: 'favicon.png',
                template: path.resolve(__dirname, './src/index.html.ejs'),
                title: 'Marlon B. Buella',
                meta: {
                    charset: { charset: 'utf-8' },
                    viewport: 'width=device-width, initial-scale=1'
                }
            }),
            new MiniCssExtractPlugin({ filename: 'css/[name].bundle' + ( isProd ? '.[contenthash]' : '' ) + '.css' }),
            new ImageminWebpWebpackPlugin(),
            new webpack.ProvidePlugin({
                // inject ES5 modules as global vars
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),
        ],
    };
}
