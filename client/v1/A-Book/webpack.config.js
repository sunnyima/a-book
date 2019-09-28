const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
      },
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader']
	}
	,
			{
				test: /\.jpg$/,
                loader: "url-loader"
},
			{
				test: /\.png$/,
                loader: "url-loader"
			}
    ]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, 'dist')
	}
}
