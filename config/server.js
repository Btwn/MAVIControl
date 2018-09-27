const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const router = require('./router.js')

const app = express()
const config = require('../config/webpack.config.js')
const compiler= webpack(config)

// setting
app.set('port', process.env.PORT || 3000)

// middleware
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))
app.use(express.static(__dirname + '../public'))

// routes
app.use('/test', router)

app.listen(app.get('port'), () => {
    console.log('Server corriendo en el puerto: ', app.get('port'));
})