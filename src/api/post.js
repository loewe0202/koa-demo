module.exports = function (ctx) {
  let { body } = ctx.request
  ctx.body = {
    code: 200,
    data: {
      ...body
    }
  }
}
