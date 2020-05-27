import combineRouters from 'koa-combine-routers'
import demoRouter from './modules/demoRouter'
import userRouter from './modules/userRouter'

const router = combineRouters(demoRouter, userRouter)

export default router
