const express = require('express')
const app = express()

// setting
app.set('port', process.env.PORT || 3000)

// middleware

// routes
app.get('/', (req, res) => {
    res.send('testw')
})

app.listen(app.get('port'), () => {
    console.log('Server corriendo en el puerto: ', app.get('port'));
})