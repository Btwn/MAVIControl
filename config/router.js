const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('texto')
})

router.get('/auth', '../module/Application/src/Controller/authControler.js')

module.exports = router
