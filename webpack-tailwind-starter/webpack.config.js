const path=require('path')
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.css$/i, //to use these loaders style success in post cc and it's looking in the source folder
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ],
      },
}