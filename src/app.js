import Koa from 'koa'
import resolve from './utils/resolve'
import koaCors from '@koa/cors'
import koaBody from 'koa-body'
import koaJson from 'koa-json'
import koaHelmet from 'koa-helmet'
import koaStatic from 'koa-static'
import koaCompose from 'koa-compose'
import koaCompress from 'koa-compress'
import router from './routers/index'

const idDevMode = process.env.NODE_ENV === 'production' ? false : true

const app = new Koa()
const middleware = koaCompose([
  koaHelmet(),
  koaBody(),
  koaCors(),
  koaStatic(resolve('../static')),
  koaJson({ pretty: false, param: 'pretty' })
])

if (!idDevMode) {
  app.use(koaCompress())
}
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
