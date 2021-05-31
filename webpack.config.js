// webpack.config.js  
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
	// Tell webpack to start bundling our app at app/index.js
	entry: './App/index.jsx',
	
	// Output our app to the dist/ directory
	output: {
		filename: 'app.js',
		path: __dirname + '/'
	},    
	// Tell webpack to run our source code through Babel
	module: {
	    rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
	},
	// Since Webpack only understands JavaScript, we need to
	// add a plugin to tell it how to handle html files.   
	plugins: [
		// Configure HtmlPlugin to use our own index.html file
		// as a template.
		// Check out https://github.com/jantimon/html-webpack-plugin
		// for the full list of options.
		new HtmlPlugin({
			template: 'App/index.html'
		})
	]
}
