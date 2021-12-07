'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const nsp = app.io.of('/')
    const req = ctx.request.query[0]
    nsp.emit('changeUrl', req)
    console.log(req)
    ctx.body = req;
  }

  async event() {
    const { ctx } = this
    ctx.body = {
      req: ctx.req.__SLS_EVENT__,
      request: ctx.request.__SLS_EVENT__
    }
  }

  async getConfig() {
    const { ctx } = this
    ctx.body = this.config
  }
}

module.exports = HomeController
