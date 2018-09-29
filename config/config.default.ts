import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538037949809_2318';

  // add your egg config in here
  config.middleware = ['authHandler', 'errorHandler'];

  // jwt auth config
  config.authHandler = {
    enable: true,
    secret: "123456@data.secret",
    expiresIn: '12h',   // 有效期
    algorithm: 'HS512', // hmac摘要算法
    match: ['/users'],
  };

  // add logger config
  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG'
  };

  // add sequelize config
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'test',
    password: 'jiangink',
    database: 'eggseed'
  };

  // add security config
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
