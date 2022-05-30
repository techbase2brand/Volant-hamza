const path = require("path")

module.exports = {
  entry: {
    'index': "./scripts/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
	   {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
          },
          'sass-loader',
        ]
      },
	  {
		test: /\.(jpe?g|gif|png|svg|webp|mp4)$/i,
		use: [
		{
		  loader: 'url-loader',
		  options: {
			limit: 10000
		  }
		}
	  ]
	}
    ]
  },
  output: {
    filename: "[name].bundle.js",
    // publicPath: path.resolve(__dirname, "assets"),
    path: path.resolve(__dirname, "assets")
  }
}