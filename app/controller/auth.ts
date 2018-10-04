import { Controller } from 'egg';
import { isEmpty } from 'lodash';
import { RespStatus } from '../../config/responseStatus';


export default class HomeController extends Controller {

  /**
   * 登录
   */
  public async signin() {
    const { app, ctx, logger } = this;
    const { username, password } = ctx.request.body;

    try {
      // 验证管理员信息
      let adminInfo = await ctx.service.admin.getInfoByName(username);
      logger.debug(`adminInfo: ${JSON.stringify(adminInfo)}`);
      if (isEmpty(adminInfo) || (adminInfo.password != password)) {
        return ctx.responseFormat(RespStatus.NAME_PASSWD_ERR);
      }

      // 创建Token
      let { id, name } = adminInfo;
      let { expiresIn } = app.config.jwt;
      let token = ctx.service.jwtAuth.createToken({ id, name });

      // 将token存储至redis
      await app.redis.set(name, token);
      await app.redis.expire(name, expiresIn);

      // 返回登录验证结果
      ctx.responseFormat(RespStatus.SUCCESS, { token });
    } catch (e) {
      ctx.logger.error(e.stack);
      return ctx.responseFormat(RespStatus.SERV_INSIDE_ERR);
    }

  };

  /**
   * 注册
   */
  public async signup() {
    const { ctx, logger } = this;
    const { username, password } = ctx.request.body;
    try {
      // 检测账号是否重复注册
      let adminInfo = await ctx.service.admin.getInfoByName(username);
      if (adminInfo) {
        logger.error(`admin name is repeat!`);
        ctx.responseFormat(RespStatus.SIGNUP_NAME_REPEAT);
      }

      // 创建管理员账号
      let createRes = await ctx.service.admin.createAdmin({ name: username, password });
      logger.debug(`createRes: ${JSON.stringify(createRes)}`);

      // 返回注册结果
      return ctx.responseFormat(RespStatus.SIGNUP_SUCCESS);
    } catch (e) {
      ctx.logger.error(e.stack);
      return ctx.responseFormat(RespStatus.SERV_INSIDE_ERR);
    }
  }

  /**
   * 注销
   */
  public async signout() {
    const { app, ctx, logger } = this;
    let token = ctx.request.header.authorization;
    let adminInfo = ctx.state.adminInfo;
    try {
      // redis中删除token
      await app.redis.del(adminInfo.name);

      logger.debug(`token: ${token}`);
      return ctx.responseFormat(RespStatus.SUCCESS);

    } catch (e) {
      ctx.logger.error(e.stack);
      return ctx.responseFormat(RespStatus.SERV_INSIDE_ERR);
    }

  }


}
