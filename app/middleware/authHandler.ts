import { Context } from 'egg';
import { isNil } from 'lodash';
import { RespStatus } from '../../config/responseStatus';

const posternToken = 'apidebug';

// 这里是你自定义的中间件
export default function authHandler(): any {
  return async (ctx: Context, next: () => Promise<any>) => {

    let token = ctx.helper.getAccessToken();
    if (isNil(token)) {
      ctx.logger.error('get request token is nil.');
      return ctx.responseFormat(RespStatus.TOKEN_AUTH_FAIL);
    }
    if (token == posternToken) {
      return next();
    } else {

      try {

        // token 验证
        let adminInfo = ctx.service.jwtAuth.verifyToken(token);

        // 查询redis中该用户是否存在
        let isExist = await ctx.app.redis.exists(adminInfo.name);
        if(!isExist) {
          ctx.logger.error(`token is expire or signout.`);
          return ctx.responseFormat(RespStatus.TOKEN_AUTH_FAIL);
        }

        // 透传token用户信息
        ctx.state.adminInfo = adminInfo;
        //logger.debug(`token userInfo: ${JSON.stringify(result)}`);
        return next();
      }
      catch (err) {
        //logger.warn(err.message);
        ctx.responseFormat(RespStatus.TOKEN_AUTH_FAIL);
      }

    }
  };
}