const Client = require('../models/client');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    async clientCreate(req, res, next) {
        try {
            let usertoken = req.headers.authorization.split(' ');
            let userInfo = jwt.verify(usertoken[1], process.env.JWT_KEY);
            let client = new Client(req.body);
            client.set({distributor_id: userInfo.id});
            console.log(userInfo.id);
            await client.save();
            await User.findByIdAndUpdate(userInfo._id, { $push: {clients: client}});
            res.status(201).send(client);
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async clientShow(req, res, next) {
        let usertoken = req.headers.authorization.split(' ');
        let userInfo = jwt.verify(usertoken[1], process.env.JWT_KEY);
        let clients = await Client.find({distributor_id: userInfo.id});
        res.send(clients);
    }
};
