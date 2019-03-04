// var mongoose = require('mongoose');
const User = require('../models/user.model');

let dev_db_url = process.env.DB_URL;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


// create a user a new user
var testUser = new User({
    name: 'teamByte',
    email: 'byteme@byte.com',
    password: 'Password123'
});

// save user to database
testUser.save(function(err) {
    if (err) throw err;

    // fetch user and test password verification
    User.findOne({ name: 'teamByte' }, function(err, user) {
        if (err) throw err;

        // test a matching password
        user.comparePassword('Password123', function(err, isMatch) {
            if (err) throw err;
            console.log('Password123:', isMatch); // -> Password123: true
        });

        // test a failing password
        user.comparePassword('123Password', function(err, isMatch) {
            if (err) throw err;
            console.log('123Password:', isMatch); // -> 123Password: false
        });
    });
});
