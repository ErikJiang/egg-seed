'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, STRING, ENUM, UUID, UUIDV4, BOOLEAN, literal } = Sequelize;
    await queryInterface.createTable('tb_user', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: UUID,
        defaultValue: UUIDV4,
      },
      name: {
        type: STRING(30),
        unique: true
      },
      email: {
        type: STRING(50),
        unique: true
      },
      phone: {
        type: STRING(20),
        unique: true
      },
      password: {
        type: STRING(20),
        allowNull: false
      },
      isVip: {
        type: BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: ENUM,
        values: ['ENABLE', 'DISABLE'],
        defaultValue: 'ENABLE',
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    }, {
        indexes: [
          {
            unique: true,
            fields: ['email']
          },
          {
            unique: true,
            fields: ['phone']
          },
        ],
        comment: '用户信息表'
      });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('tb_user');
  }
};
