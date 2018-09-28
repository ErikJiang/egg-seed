// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Auth from '../../../app/controller/auth';
import Home from '../../../app/controller/home';
import Users from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    auth: Auth;
    home: Home;
    users: Users;
  }
}
