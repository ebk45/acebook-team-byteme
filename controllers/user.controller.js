const User = require('../models/user.model')


exports.test = function (req, res) {
  res.send('Greetings from the test controller!');
};

exports.user_create = function (req, res) {

  let user = new User(
    {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
    }
  );

  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('User created successfully')
  })
};

exports.user_details = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.send(user);
  })
};

exports.user_update = function (req, res) {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
    if (err) return next(err);
    res.send('User updated.');
  });
};
