import { Controller } from 'egg';
import { RespStatus } from '../../config/responseStatus';

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

export default class HomeController extends Controller {

  public async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    let res = await ctx.model.User.findById(toInt(ctx.params.id));
    ctx.helper.respFormat(RespStatus.SUCCESS, res);
  }

  async create() {
    const ctx = this.ctx;
    const { username, password } = ctx.request.body;
    const user = await ctx.model.User.create({ username, password });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { username, password } = ctx.request.body;
    await user.update({ username, password });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}
