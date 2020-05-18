const combineRouters = require('koa-combine-routers')
const commonRouter = require('./modules/common')
const userRouter = require('./modules/user')

const router = combineRouters(commonRouter, userRouter)

module.exports = router
