var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src/main/js'),
  entry: {
    main: './MainPage.js',
    page1: './Page1Page.js',
    home: './HomePage.js'
  },
  devtool: 'sourcemaps',
  cache: true,
  output: {
    path: __dirname,
    filename: './src/main/webapp/bundle/react/[name].bundle.js'
  },
  mode: 'none',
  module: {
    rules: [ {
      test: /\.js?$/, //js 파일들을 변환해라
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
	    options: {
	      presets: [ '@babel/preset-env', '@babel/preset-react' ]
	    }
      }
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    } ]
  }
};
