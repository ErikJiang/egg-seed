import { Service } from 'egg';

export default class NewsService extends Service {
  /**
   * 生成 Token
   * @param {Object} data - token生成原对象
   */
  public createToken(data) {
    const { app } = this;
    const { secret, algorithm, expiresIn } = app.config.jwt;
    return app.jwt.sign(data, secret, { algorithm, expiresIn });
  }

  /**
   * 验证 Token
   * @param {String} token - token待验字符串
   */
  public verifyToken(token) {
    const { app } = this;
    const { secret } = app.config.jwt;
    if (token) {
      try {
        return app.jwt.verify(token, secret);
      }
      catch (e) {
        app.logger.error(e.message);
        throw new Error('token认证失效');
      }
    }
    throw new Error('token信息为空.');
  }
}