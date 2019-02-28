const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BitSchema = new Schema({
  post: {type: String, required: true, max: 250},
});

//export the model
module.exports = mongoose.model('Bit', BitSchema);
