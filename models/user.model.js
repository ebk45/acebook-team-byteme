const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10; // to auto-gen salt, this cescribes the cost factor/ hashing rounds
const Schema = mongoose.Schema;


let UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
    unique: true
  },
  email: {
    type: String,
    required: true,
    max: 100,
    unique: true
  },
  password: {
    type: String,
    required: true,
    max: 20
  }

});

UserSchema.plugin(uniqueValidator);

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});


//export the model
module.exports = mongoose.model('User', UserSchema);
