const Koa = require('koa')
const open = require('open')
const router = require('./src/routers/index')
const cors = require('@koa/cors')
const koaBody = require('koa-body')

const app = new Koa()

app.use(koaBody())
app.use(cors())

// 全局中间件
app.use(async (ctx, next) => {
  ctx.token = 'loewe0202'
  await next()
})
app.use(router())

app.listen(3000, () => {
  open('http://localhost:3000/')
  console.info('服务运行在：http://localhost:3000/')
})
