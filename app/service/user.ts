import { Service } from 'egg';

export default class NewsService extends Service {
  /**
   * 生成 Token
   * @param {Object} data - token生成原对象
   */
  public async createToken(data) {
    const { app } = this;
    const { secret, algorithm, expiresIn } = app.config.jwt;
    return app.jwt.sign(data, secret, { algorithm, expiresIn });
  }
}