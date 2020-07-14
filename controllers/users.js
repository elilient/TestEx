const User = require('../models/user');

module.exports = {
    async userRegister(req, res, next) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send({ user })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async userLogin(req, res, next) {
        try {
            const { id } = req.body;
            const user = await User.findByCredentials(id);
            const token = await user.generateAuthToken();
            res.send({token, id})
        } catch (error) {
            res.status(401).send(error)
        }
    },
    userMe(req, res, next) {
        res.send(req.user);
    },

    async userLogout(req,res,next) {
    }
};
