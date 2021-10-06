const express = require('express')

const controller = require('../controller/producto.controller')

const router = express.Router()

const path = 'producto'

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router