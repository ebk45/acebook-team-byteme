const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;

let BitSchema = new Schema({
  post: {
    type: String,
    required: true,
    max: 250 },
  userId: {type: String, required: true, max: 100 }

});

BitSchema.plugin(timestamps);

//export the model
module.exports = mongoose.model("Bit", BitSchema);
