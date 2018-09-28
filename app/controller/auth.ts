import { Controller } from 'egg';
import { isEmpty } from 'lodash';
import { RespStatus } from '../../config/responseStatus';


export default class HomeController extends Controller {

  /**
   * 登录
   */
  public async signin() {
    const ctx = this.ctx;
    const { email, password } = ctx.request.body;

    // 验证登录用户信息
    let userInfo = await ctx.model.User.findOne({ where: { email } })
    if (isEmpty(userInfo) || (userInfo.password != password)) {
      ctx.fail(RespStatus.NAME_PASSWD_ERR);
    }

    // 创建Token
    let { uuid, name, phone } = userInfo;
    let token = ctx.service.jwtAuth.createToken({
      uuid, name, phone
    });
    ctx.success(RespStatus.SUCCESS, { token });
  };

  /**
   * 注册
   */
  public async signup() {
    const ctx = this.ctx;
    const { email, password, name, phone } = ctx.request.body;
    try {
      const user = await ctx.model.User.create({ email, password, name, phone });
      ctx.logger.debug(`user result: ${JSON.stringify(user)}.`);
      ctx.success(RespStatus.SIGNUP_SUCCESS, {email, name, phone});
    } catch(e) {
      ctx.logger.error(e.stack);
      ctx.fail(RespStatus.SERV_INSIDE_ERR);
    }
  }


}
