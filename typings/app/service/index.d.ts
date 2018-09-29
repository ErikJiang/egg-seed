// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import JwtAuth from '../../../app/service/jwtAuth';
import Test from '../../../app/service/Test';
import User from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    jwtAuth: JwtAuth;
    test: Test;
    user: User;
  }
}
