const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    distributor_name: {
        type: String,
        required: true,
    },
    tokens:[{
        token: {
            type: String,
            required: true
        }
    }]
});


UserSchema.methods.generateAuthToken = async function() {
    const user = this;
    const { _id, id, distributor_name } = user;
    const token = jwt.sign({_id, id, distributor_name}, process.env.JWT_KEY);
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token
};

UserSchema.statics.findByCredentials = async (id) => {
    const user = await User.findOne({id});
    if (!user) {
        throw new Error({ error: 'Invalid Login credentials '})
    }
    return user
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
