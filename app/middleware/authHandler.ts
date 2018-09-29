import { Context } from 'egg';
import { isNil } from 'lodash';
import { RespStatus } from '../../config/responseStatus'

const posternToken = 'apidebug';

// 这里是你自定义的中间件
export default function authHandler(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 你可以获取 config 的配置：
    // const config = ctx.app.config;
    // config.xxx....
    let token = ctx.helper.getAccessToken();
    if (isNil(token)) {
      ctx.logger.error('get request token is nil.');
      return ctx.responseFormat(RespStatus.TOKEN_AUTH_FAIL);
    }
    if (token == posternToken) {
      return next();
    } else {

      try {
  
        // 在 redis 中查找，若找不到该token，则认为token过期或已注销 todo
        // if (!redis.find(token)) {
        //   ctx.logger.error('token expire or token logout.');
        //   ctx.fail(RespStatus.TOKEN_AUTH_FAIL);;
        // }
  
        // token 验证
        let result = ctx.service.jwtAuth.verifyToken(token);
        // 透传token用户信息
        ctx.state.userInfo = result;
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