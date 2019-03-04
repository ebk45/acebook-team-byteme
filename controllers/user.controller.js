const User = require('../models/user.model')
console.log("execute user controller");

exports.test = function (req, res) {
  res.send('Greetings from the test controller!');
};

exports.user_create = function (req, res, next) {

  let user = new User(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
  );

  user.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('User created successfully')
    // res.redirect("/");
  })
};

// exports.user_details = function (req, res, next) {
//   User.findById(req.params.id, function (err, user) {
//     if (err) return next(err);
//     res.send(user);
//   })
// };
//
// exports.user_update = function (req, res, next) {
//   User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
//     if (err) return next(err);
//     res.send('User updated.');
//   });
// };
//
// exports.user_delete = function (req, res, next) {
//   User.findByIdAndRemove(req.params.id, function (err) {
//     if (err) return next(err);
//     res.send('Deleted successfully!');
//   })
// };
