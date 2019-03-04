const Bit = require("../models/bit.model");

exports.test = function(req, res) {
  res.send("Greetings from the test controller!");
};

exports.bit_create = function(req, res, next) {
  let bit = new Bit({
    post: req.body.post
  });

  bit.save(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

exports.bit_details = function(req, res, next) {
  Bit.findById(req.params.id, function(err, bit) {
    if (err) return next(err);
    res.send(bit);
  });
};

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
