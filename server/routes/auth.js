const router = require('express').Router()
const ctrls = require('../controllers/auth')
const validateDto = require('../middlewares/validation')
const {stringReq, numberReq} = require('../middlewares/joiSchema')
const Joi = require('joi')

router.post('/register', validateDto(Joi.object({
    password: stringReq,
    name: stringReq,
    phone: numberReq
})), ctrls.register)

module.exports = router