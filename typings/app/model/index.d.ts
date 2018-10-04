// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Admin from '../../../app/model/admin';
import User from '../../../app/model/user';

declare module 'sequelize' {
  interface Sequelize {
    Admin: ReturnType<typeof Admin>;
    User: ReturnType<typeof User>;
  }
}
