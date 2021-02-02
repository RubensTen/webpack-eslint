# Webpack - eslint-webpack-plugin

This is a basic repository to reproduce the issue 

  https://github.com/webpack-contrib/eslint-webpack-plugin/issues/57

This project is using typescript, react, webpack and eslint-webpack-plugin.

## Configuration
The project is using eslint-webpack-plugin by default, you can open the webpack.config.js and see in the line 47 the configuration to eslint-webpack-plugin.

Also in the file index.tsx you can see bad code in the line 4, 6 and 18 to show errors or warnings by eslint

#### Issue eslint-webpack-plugin doesn't show the errors of the file index.tsx

#### If you can see the errors with eslint-loader you can uncomment the line 17 inside of webpack.config.js


## Run/Build project

Install dependencies
    
    npm i


Execute project 
    
    npm start

Build

    npm run build
