'use strict';

module.exports = app => {
  const { INTEGER, STRING, ENUM, UUID, UUIDV4, BOOLEAN, literal } = app.Sequelize;

  const User = app.model.define('user', {
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
      defaultValue: literal('CURRENT_TIMESTAMP'),
      onUpdate: literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  }, {
      timestamps: false,
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
  return User;
};