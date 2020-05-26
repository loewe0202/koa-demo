const asyncFn = async ctx => {
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

export default asyncFn
