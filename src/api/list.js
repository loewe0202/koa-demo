const list = ctx => {
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

export default list
