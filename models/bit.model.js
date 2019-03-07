const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;

let Bit = new Schema({
  post: {
    type: String,
    required: true,
    max: 250 },
  userId: {type: String, required: true, max: 100 },
  likes: { type: Number, min: 0, required: true, default: 0 },
  whoLiked: [],
  whoDisliked: []
});

Bit.plugin(timestamps);

//export the model
module.exports = mongoose.model("Bit", Bit);
