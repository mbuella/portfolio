const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
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
  let postCssLoader = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [["postcss-preset-env", {}]],
      },
    },
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
      minimizer: [
        new ImageMinimizerPlugin({
          // Only apply this one to files equal to or over 8192 bytes
          filter: (source) => {
            return (source.byteLength >= 8192);
          },
          minimizerOptions: {
            plugins: [['jpegtran', { progressive: true }]],
            plugins: [['optipng', { optimizationLevel: 6 }]],
          },
        }),
        new ImageMinimizerPlugin({
          // Only apply this one to files under 8192
          filter: (source) => {
            return (source.byteLength < 8192);
          },
          minimizerOptions: {
            plugins: [['jpegtran', { progressive: false }]],
          },
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', {
              discardComments: { removeAll: true },
            }],
          },
        }),
        new TerserPlugin({ parallel: true })
      ],
      splitChunks: { chunks: 'all' },
    },
    output: {
      filename: 'js/[name].bundle' + (isProd ? '.[contenthash]' : '') + '.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '../'
    },
    module: {
      rules: [
        {
          test: /\.(c|le)ss$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader', postCssLoader, 'less-loader' ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|webp)$/i,
          loader: 'file-loader',
          options: { name: '[name].[ext]', outputPath: 'img', esModule: false }
        },
        {
          test: /\.woff(2)?$|\.ttf$|\.eot$/,
          loader: 'file-loader',
          options: { name: '[name].[ext]', outputPath: 'fonts' }
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
      new MiniCssExtractPlugin({ filename: 'css/[name].bundle' + (isProd ? '.[contenthash]' : '') + '.css' }),
      new HtmlCriticalWebpackPlugin({
        base: path.resolve(__dirname, 'dist'),
        src: 'index.html',
        dest: 'index.html',
        inline: true,
        minify: true,
        extract: true,
        width: 375,
        height: 565,
        penthouse: {
          blockJSRequests: false,
        }
      }),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['svgo', {
              plugins: [{ removeViewBox: false }],
            }],
          ],
        },
        // Disable `loader`
        loader: false
      }),
      new ImageMinimizerPlugin({
        deleteOriginalAssets: false,
        filename: 'img/[name].webp',
        minimizerOptions: { plugins: ['imagemin-webp'] },
      }),
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
