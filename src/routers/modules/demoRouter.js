import Router from 'koa-router'
import demoController from '../../api/DemoController'

const commonRouter = new Router({
  prefix: '/api/common'
})

commonRouter.get('/list', demoController.list)
commonRouter.get('/async', demoController.asyncFn)
commonRouter.get('/post', demoController.post)

export default commonRouter
