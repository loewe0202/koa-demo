import combineRouters from 'koa-combine-routers'
import commonRouter from './modules/common'
import userRouter from './modules/user'

const router = combineRouters(commonRouter, userRouter)

export default router
