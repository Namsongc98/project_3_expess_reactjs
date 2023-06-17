const jwt = require("jsonwebtoken");
const AuthorizationUser = (req, res, next) => {
  const authorization = req.headers.token.split(" ")[1];
  if (!authorization) {
    res.status(401).json({
      message: "bạn chưa login ",
    });
  } else {
    jwt.verify(authorization, process.env.SECRET, (err) => {
      if (err) {
        res.status(403).json({
          message: "Hết hạn đăng nhập",
        });
      } else {
        res.status(200)
        next()
      }
    });
  }
};

module.exports = AuthorizationUser
