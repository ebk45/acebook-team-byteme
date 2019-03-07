const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;

let Bit = new Schema({
  post: { type: String, required: true, max: 250 }
});

Bit.plugin(timestamps);

//export the model
module.exports = mongoose.model("Bit", Bit);
