const HtmlWebPackPlugin = require('html-webpack-plugin');
let path = require('path');
let nodeExternals = require('webpack-node-externals');


const moduleObj = {    
    loaders: [        
        {            
            test: /\.js$/,            
            exclude: /node_modules/,            
            loaders: ["babel-loader"],        
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
        {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    },
                },
            ],
        },
    ],
};

const client = {  
    entry: {    
        'client': './src/client/index.js'  
    },  
    target: 'web',  
    output: {    
        filename: '[name].js',    
        path: path.resolve(__dirname, 'dist/public')  
    },  
    module: moduleObj,
    plugins: [    
        new HtmlWebPackPlugin({
            template: 'src/client/index.html'    
        })  
    ]
};


const server = {    
    entry: {        
        'server': './src/server/index.js'    
    },    
    target: 'node',    
    output: {        
        filename: '[name].js',        
        path: path.resolve(__dirname, 'dist')    
    },    
    module: moduleObj,    
    externals: [nodeExternals()]
};

module.exports = [client, server];
