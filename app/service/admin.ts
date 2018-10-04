import { Service } from 'egg';

export default class NewsService extends Service {

  /**
   * 获取管理员信息
   * @param name - 管理员名称
   */
  public async getInfoByName(name: string) {
    return await this.ctx.model.Admin.findOne({ where: { name } });
  }

  /**
   * 修改密码
   * @param adminId - 管理员ID
   * @param newPwd - 新密码
   */
  public async alterPasswd(adminId: number, newPwd: string) {
    return await this.ctx.model.Admin.update({ password: newPwd }, { where: { id: adminId } });
  }

  /**
   * 创建管理员
   * @param data - 管理员注册信息
   */
  public async createAdmin(data: {name:string, password: string}) {
    return await this.ctx.model.Admin.create(data);
  }
}