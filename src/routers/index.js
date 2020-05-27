import combineRouters from 'koa-combine-routers'
import commonRouter from './modules/demoRouter'
import userRouter from './modules/userRouter'

const router = combineRouters(commonRouter, userRouter)

export default router
