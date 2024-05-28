const asyncHandler = require('express-async-handler')

const register = asyncHandler(async (req, res) => {
    const { phone } = req.body
    return res.json({
        success: true,
        mes: 'ok',
        data: { phone }
    })
})

module.exports = {
    register
}