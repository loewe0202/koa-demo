import Router from 'koa-router'

const userRouter = new Router({
  prefix: '/api/user'
})

userRouter.get('/', async ctx => {
  const query = ctx.request.query
  ctx.body = {
    code: 200,
    data: {
      token: ctx.token,
      ...query
    }
  }
})

export default userRouter
