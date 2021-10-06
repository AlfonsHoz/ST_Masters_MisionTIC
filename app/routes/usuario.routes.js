const express = require('express')

const controller = require('../controller/usuario.controller')

const router = express.Router()

const path = 'usuario'

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router