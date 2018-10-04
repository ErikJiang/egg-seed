import { Context } from 'egg';
import { IRespMessage, RespStatus } from '../../config/responseStatus'

export default {

  /**
   * 响应返回格式化处理
   * @param this 
   * @param respStatus 
   * @param data 
   */
  responseFormat(this: Context, respStatus: IRespMessage, data = {}) {
    if (!respStatus) {
      this.logger.error(`response status param not found!`);
      respStatus = RespStatus.SERV_INSIDE_ERR;
    }
    this.body = { code: respStatus.code, message: respStatus.message, data };
    this.status = respStatus.httpStatus;
  },

}
