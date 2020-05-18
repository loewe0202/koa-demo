/*
 * @Author: loewe0202
 * @Date: 2020-05-16 14:35:24
 * @Last Modified by: loewe0202
 * @Last Modified time: 2020-05-18 22:54:42
 */

const open = require('open')
const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()
router.prefix('/api')

// 全局中间件
app.use(async (ctx, next) => {
  ctx.token = 'loewe0202'
  await next()
})

router.get('/list', ctx => {
  const query = ctx.request.query
  ctx.body = {
    code: 200,
    data: {
      token: ctx.token,
      ...query
    }
  }
})

router.get('/async', async ctx => {
  let result = await new Promise(resolve => {
    setTimeout(() => {
      resolve('2s later!')
    }, 2000)
  })
  ctx.body = {
    code: 200,
    data: {
      token: ctx.token,
      info: result
    }
  }
})

router.post('/post', async ctx => {
  let { body } = ctx.request
  ctx.body = {
    code: 200,
    data: {
      ...body
    }
  }
})

app.use(koaBody())
app.use(cors())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  open('http://localhost:3000/api/list')
  console.info('服务运行在：http://localhost:3000/')
})
