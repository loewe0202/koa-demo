import Router from 'koa-router'
import list from '../../api/list'
import asyncFn from '../../api/asyncFn'
import post from '../../api/post'

const commonRouter = new Router({
  prefix: '/api/common'
})

commonRouter.get('/list', list)
commonRouter.get('/async', asyncFn)
commonRouter.get('/post', post)

export default commonRouter
