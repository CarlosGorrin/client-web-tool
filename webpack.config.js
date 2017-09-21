const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require("webpack")
const dev = true
const extractCss = new ExtractTextPlugin({
  filename: '/src/css/styles.css',
  disable: dev
})

const extractSass = new ExtractTextPlugin({
  filename: '/src/css/sassStyles.css',
  disable: dev
})


module.exports = {
  context: __dirname,
  entry: './src/app.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/src/public/'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/common/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
            // use style-loader in development
          fallback: 'style-loader'
        })
      },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'}
    ]
  },
  plugins: [
    extractCss,
    extractSass,
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new webpack.ProvidePlugin({
        Tether: "tether"
    })
  ]
}
