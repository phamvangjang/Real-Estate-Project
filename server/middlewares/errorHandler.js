const errHandler = (error, req, res, next) => {
    console.log({
        err: error.message,
        res: res.statusCode
    })
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    return res.status(statusCode).json({
        success: false,
        mes: error.message,
    })
}

const throwErrorWithStatus = (code, message, res, next) => {
    const error = new Error(message)
    res.status(code)
    next(error)
}

module.exports = {
    errHandler,
    throwErrorWithStatus
}