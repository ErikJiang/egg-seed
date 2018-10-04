'use strict';

module.exports = app => {
  const { INTEGER, STRING, literal } = app.Sequelize;

  const Admin = app.model.define('tb_admin', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING(30),
      unique: true
    },
    password: {
      type: STRING(20),
      allowNull: false
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
          fields: ['name']
        },
      ],
      freezeTableName: true,
      comment: '管理员信息表'
    });
  return Admin;
};