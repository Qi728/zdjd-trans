/**
 * @type {import('@rspack/cli').Configuration}
 */
const path = require("path");
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/main.tsx"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			},
			{
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              // ...
            },
          },
        ],
        type: 'css',
      },
		]
	},
	resolve: {
		alias: {
			"@":  path.resolve(__dirname, './src'),
		}
	},
	output: {
    filename: "js/[name].[contenthash].bundle.js",
    cssFilename: "css/[name].[contenthash].css",
    assetModuleFilename: "assets/[name].[contenthash][ext]",
    clean: true,
    path: path.resolve(__dirname, "./dist"),
  },

};
