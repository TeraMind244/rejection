const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (...args) => {
	console.log("Compiled with args:", args);
	return {
		entry: path.join(process.cwd(), "src", "index.js"),
		output: {
			filename: "bundle.js",
			path: path.resolve(process.cwd(), "dist"),
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},
		plugins: [
			new HTMLWebpackPlugin({
				template: path.resolve(process.cwd(), "index.html"),
			}),
		],
		devServer: {
			contentBase: path.join(process.cwd(), "dist"),
			port: 8080,
			hot: true,
		},
		devtool: "source-map",
		resolve: {
			extensions: [".js", ".jsx"],
		},
	};
};
