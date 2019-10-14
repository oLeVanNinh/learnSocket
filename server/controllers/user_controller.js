const User = require("../models/user");
const UserController = {};


const post = function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.status(401);
    return res.json({ error: "Username or password is required"});
  }

  User.findOne({ username: username }, function(err, user) {
    if (err) { return next(err); }
    if (user) {
      return res.json({token: user.token() });
    }

    const newUser = new User({
      username: username,
      password: password
    });

    newUser.save();
    res.json({ token: newUser.token() })
  })
}

UserController.post = post;

module.exports = UserController;