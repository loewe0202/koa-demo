class DemoController {
  constructor() {}

  async asyncFn(ctx) {
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
  }

  list(ctx) {
    const query = ctx.request.query
    ctx.body = {
      code: 200,
      data: {
        token: ctx.token,
        currentTime: new Date().getTime(),
        ...query
      }
    }
  }

  post(ctx) {
    let { body } = ctx.request
    ctx.body = {
      code: 200,
      data: {
        ...body
      }
    }
  }
}

export default new DemoController()
