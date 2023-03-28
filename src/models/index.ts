import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize: Sequelize = new Sequelize({
    host: '127.0.0.1',
    username: 'root',
    password: 'root',
    database: 'jihyun',
    dialect: 'mysql',
    models: [path.join(__dirname, '*.model.ts')],
});

export default sequelize;
