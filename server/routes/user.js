const router = require('express').Router()
const ctrls = require('../controllers/user')
const validateDto = require('../middlewares/validation')
const { stringReq, numberReq } = require('../middlewares/joiSchema')
const Joi = require('joi')
const { verifyToken } = require('../middlewares/verifyToken')

router.get('/current', verifyToken, ctrls.getCurrent)

module.exports = router