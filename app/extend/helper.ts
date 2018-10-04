import { IHelper } from 'egg';

export default {
    
    // 解析获取 Token
    getAccessToken(this: IHelper) {
        const ctx = this.ctx;
        let { authorization } = ctx.request.header;
        return authorization && authorization.replace("Bearer ", "");
    },
    
}