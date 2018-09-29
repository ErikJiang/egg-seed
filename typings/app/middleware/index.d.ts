// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import AuthHandler from '../../../app/middleware/authHandler';
import ErrorHandler from '../../../app/middleware/errorHandler';

declare module 'egg' {
  interface IMiddleware {
    authHandler: typeof AuthHandler;
    errorHandler: typeof ErrorHandler;
  }
}
