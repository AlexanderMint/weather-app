const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
process.env.BABEL_ENV = nodeEnv;
const isProd = nodeEnv === 'production';
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';
const NODE_PORT = process.env.NODE_PORT || 3000;

function getEntrySources(sources) {
  if (!isProd) {
    sources.unshift('react-hot-loader/patch');
    sources.unshift(`webpack-dev-server/client?http://${NODE_HOST}:${NODE_PORT}`);
    sources.unshift('webpack/hot/dev-server');
  }

  return sources;
}


module.exports = {
  entry: {
    js: getEntrySources(['./src/main.js']),
    vendor: [
      'react',
      'react-dom',
      'react-tap-event-plugin',
      'material-ui',
      'material-ui-search-bar',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'react-redux',
      'axios',
      'prop-types'
    ]
  },
  output: {
    path: path.join(__dirname, '/public/build/'),
    publicPath: '/build/',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js'
  },

  externals: {
    jquery: 'jQuery'
  },

  resolve: {
    extensions: [' ', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },

  performance: {
    hints: isProd ? 'warning' : false
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [
          'file-loader?name=[name].[ext]',
          {
            loader: 'img-loader',
            query: {
              gifsicle: { interlaced: false },
              jpegtran: {
                progressive: true,
                arithmetic: false
              },
              optipng: { optimizationLevel: 5 },
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { convertPathData: false }
                ]
              }
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'file-loader?name=[name].[ext]',
        exclude: [/node_modules/]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }],
                'react',
                'stage-1',
              ]
            }
          }
        ],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  devServer: {
    historyApiFallback: false,
    inline: false,
    contentBase: path.join(__dirname, '/public'),
    port: NODE_PORT,
    hot: true,
    stats: {
      assets: true,
      children: true,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      progress: true,
      timings: true,
      version: false,
      warnings: true,
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ]
};

if (isProd) {
  const productionPlugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      postcss: [
        mixins(),
        autoprefixer({
          browsers: [
            'last 2 versions',
            'ie >= 11'
          ]
        })
      ],
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    })
  ];

  module.exports.plugins.push(...productionPlugins);
} else {
  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ];

  module.exports.plugins.push(...devPlugins);
}
