import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;
  const authMiddleware = app.middleware.authHandler;

  router.get('/', controller.home.index);
  
  router.get('/test', authMiddleware(), controller.home.test);
  // 登录
  router.post('/auth/signin', controller.auth.signin);
  // 注册
  router.post('/auth/signup', controller.auth.signup);
  // 登出
  router.post('/auth/signout', authMiddleware(), controller.auth.signout);

  io.route('chat', app.io.controller.data.ping)
};
