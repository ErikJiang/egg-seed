import { IRespMessage, RespStatus, HttpStatus } from '../../config/responseStatus'
import { IHelper } from 'egg';
export default {
    /**
     * 返回值处理
     * @param ctx - 上下文
     * @param respStatus - 响应状态
     * @param data - 返回数据
     */
    respFormat(this: IHelper, respStatus: IRespMessage, data = {}) {
        const { ctx } = this;
        if (!respStatus) {
            ctx.logger.error(`respType param not found!`);
            respStatus = RespStatus.SERV_INSIDE_ERR;
        }
        if (HttpStatus.OK != respStatus.httpStatus) {
            ctx.throw(respStatus.httpStatus, {
                code: respStatus.code,
                message: respStatus.message,
                data
            });
        }
        ctx.body = { code: respStatus.code, message: respStatus.message, data };
        ctx.status = respStatus.httpStatus;
    }
}