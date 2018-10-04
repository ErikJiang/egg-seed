'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable(
      'tb_admin',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          comment: 'ID序号'
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          comment: '管理员名称'
        },
        password: {
          type: Sequelize.STRING(20),
          allowNull: false,
          comment: '管理员密码'
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          comment: '创建时间'
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
          comment: '修改时间'
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['name']
          }
        ],
        freezeTableName: true,
        comment: '管理员信息表'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('tb_admin');
  }
};
