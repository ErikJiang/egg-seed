import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.resources('users', '/users', controller.users);
  router.post('/signin', controller.auth.signin);
  router.post('/signup', controller.auth.signup);
};
