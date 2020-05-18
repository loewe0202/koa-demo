const Router = require('koa-router')
const commonRouter = new Router({
  prefix: '/api/common'
})

const list = require('../../api/list')
const asyncFn = require('../../api/asyncFn')
const post = require('../../api/post')

commonRouter.get('/list', list)
commonRouter.get('/async', asyncFn)
commonRouter.get('/post', post)

module.exports = commonRouter
