const User = require('../models/user.model')

exports.test = function (req, res) {
  res.send('Greetings from the test controller!');
};

exports.user_create = function (req, res) {
  console.log(req)
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
