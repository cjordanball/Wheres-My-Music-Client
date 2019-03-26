const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					require.resolve('style-loader'),
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]__[has: base64:5]'
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader'
				},
				{
					loader: 'less-loader'
				}]
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'src/assets/images/[name].[ext]'
					}
				}]
			},
			{
				test: /\.ttf$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'src/assets/fonts/'
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html',
			favicon: 'src/assets/images/ballIcon.ico'
		})
	]
};
