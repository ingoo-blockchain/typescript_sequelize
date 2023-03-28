import sequelize from './models';
import User from './models/user.model';
(async () => {
    await sequelize.sync({
        force: true,
    });

    const result = await new User({
        email: 'web77221@gmail.com',
        nickname: 'eeeee',
        password: '1234',
    }).save();
})();
