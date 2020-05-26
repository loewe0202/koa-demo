const post = ctx => {
  let { body } = ctx.request
  ctx.body = {
    code: 200,
    data: {
      ...body
    }
  }
}

export default post
