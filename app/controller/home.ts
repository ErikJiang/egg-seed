import { Controller } from 'egg';

export default class HomeController extends Controller {
  public index() {
    const { ctx } = this;
    ctx.body = 'THIS IS SEED SERVER!';
  }

  public test() {
    const { ctx, logger } = this;
    logger.debug(`this is test page!`);
    logger.debug(`ctx.state.userInfo: ${JSON.stringify(ctx.state.adminInfo)}`);
    ctx.body = 'this is test page';
  }

}
