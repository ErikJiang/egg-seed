import { Context } from 'egg';
import { IRespMessage, RespStatus } from '../../config/responseStatus'

export default {

  /**
   * 成功返回
   * @param this 
   * @param respStatus 
   * @param data 
   */
  success(this: Context, respStatus: IRespMessage, data = {}) {
    if (!respStatus) {
      this.logger.error(`response status param not found!`);
      respStatus = RespStatus.SERV_INSIDE_ERR;
      this.throw(respStatus.httpStatus, {
        code: respStatus.code,
        message: respStatus.message,
        data
      });
    }
    this.body = { code: respStatus.code, message: respStatus.message, data };
    this.status = respStatus.httpStatus;
  },

  /**
   * 失败返回
   * @param this 
   * @param respStatus 
   * @param data 
   */
  fail(this: Context, respStatus: IRespMessage, data = {}) {
    if (!respStatus) {
      this.logger.error(`response status param not found!`);
      respStatus = RespStatus.SERV_INSIDE_ERR;
    }
    this.throw(respStatus.httpStatus, {
      code: respStatus.code,
      message: respStatus.message,
      data
    });
  },
}
