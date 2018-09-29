import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // const auth = app.middleware.authHandler;
  router.get('/', controller.home.index);
  // router.resources('users', '/users', controller.users);
  router.get('/users', controller.users.index)
  router.post('/signin', controller.auth.signin);
  router.post('/signup', controller.auth.signup);
};
