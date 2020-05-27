import Koa from 'koa'
import resolve from './utils/resolve'
import koaCors from '@koa/cors'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import koaHelmet from 'koa-helmet'
import koaStatic from 'koa-static'
import compose from 'koa-compose'
import router from './routers/index'

const app = new Koa()
const middleware = compose([
  koaHelmet(),
  koaBody(),
  koaCors(),
  koaStatic(resolve('../static')),
  koaJson({ pretty: false, param: 'pretty' })
])

app.use(middleware)

// 全局中间件
app.use(async (ctx, next) => {
  ctx.token = 'loewe0202'
  await next()
})

app.use(router())

app.listen(3000, () => {
  console.info('服务运行在：http://localhost:3000/')
})
