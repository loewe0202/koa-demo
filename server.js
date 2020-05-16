/*
 * @Author: loewe0202
 * @Date: 2020-05-16 14:35:24
 * @Last Modified by: loewe0202
 * @Last Modified time: 2020-05-16 23:05:12
 */

const http = require('http')
const https = require('https')
const fs = require('fs')
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

http.createServer(app.callback()).listen(3000) // http 服务

const options = {
  key: fs.readFileSync('./server.key', 'utf8'),
  cert: fs.readFileSync('./server.cert', 'utf8')
}
https.createServer(options, app.callback()).listen(443) // https 服务
console.log('服务启动...')
