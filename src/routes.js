import Router from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Gustavo',
        email: 'gustavo@gmail.com.br',
        password_hash: '123223',
    });

    return res.json(user);

    /*  return res.json({
        message: 'Hello World',
    }); */
});

module.exports = routes;
