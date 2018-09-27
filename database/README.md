# 关于数据库迁移操作

## 一、数据库初始化操作

### 1. 创建数据库(数据库名: eggseed)
``` sql
CREATE DATABASE eggseed DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
```
### 2. 数据库迁移初始化表
``` shell
npx sequelize db:migrate
```

## 二、数据迁移操作

### 执行迁移
``` shell
npx sequelize db:migrate
```

### 迁移回退
``` shell
npx sequelize db:migrate:undo
```

## 三、如何初始化迁移文件

### 创建迁移文件
``` shell
npx sequelize migration:generate --name=init-[model name]
```
然后编写schema模型建表语句；