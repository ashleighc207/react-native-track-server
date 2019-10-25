const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(403).send({ error: "You must be logged in to view this page." });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) {
      res
        .status(403)
        .send({ error: "You must be logged in to view this page." });
    }
    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
