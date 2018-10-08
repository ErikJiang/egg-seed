'use strict';
import { Controller } from 'egg';

declare module 'egg' {
  interface CustomController {
    data: DataController
  }
}
class DataController extends Controller {
  async ping() {
    const { ctx } = this;
    const message = ctx.args[0];
    await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
}

export = DataController;