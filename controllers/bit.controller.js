const Bit = require("../models/bit.model");
const session = require('express-session');
const cookieParser = require('cookie-parser')
var ObjectID = require("mongoDB").ObjectID

console.log("bitcontroller execute");

exports.test = function(req, res) {
  res.send("Greetings from the test controller!");
};

exports.bit_create = function(req, res, next) {
  let bit = new Bit({
    post: req.body.post,
    userId: req.session._id
  });

  bit.save(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

  exports.bit_like = function (req, res, next) {
    // Assume when button clicked it sends post id that button is aligned to.
    let postID = req.body.postID

    Bit.findById(new ObjectID(postID), function(err, post, next){
      if (err) {
        return next(err);
      }
      else {
        if (post.whoLiked.includes(req.session._id)){
          res.end()
        }
        else {


          post.whoLiked.push(req.session._id)
          post.likes ++
          post.save()
          if (post.whoDisliked.includes(req.session._id)) {
          function isUserId (userId){
            userId === req.session._id
          }
          let userPreviouslyDisliked = post.whoDisliked.findIndex(isUserId); //removes one element out of the disliked array
          post.whoDisliked.splice(userPreviouslyDisliked, 1)
        }
          res.end()
        }
      }
    });
  };
// will implement once we have a profile user page.
// exports.bit_details = function(req, res, next) {
//   Bit.findById(req.params.id, function(err, bit) {
//     if (err) return next(err);
//     res.send(bit);
//   });
// };

exports.bit_update = function(req, res, next) {
  Bit.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, bit) {
    if (err) return next(err);
    res.send("Bit updated.");
  });
};

exports.bit_delete = function(req, res, next) {
  Bit.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

exports.bit_all = function(req, res, next) {
  Bit.find({}, function(err, allBits) {
    res.send(allBits);
  });
};
