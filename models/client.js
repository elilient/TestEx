const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: String,
    lastname: String,
    address: String,
    birthdate: Date,
    telnumber: Number,
    distributor_id: Schema.Types.Number
});
module.exports = mongoose.model('Client', ClientSchema);
