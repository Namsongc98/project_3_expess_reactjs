const { validationResult, body } = require("express-validator");

const validateUser = [
  body("firstname").notEmpty().isLength({ min: 1 }),
  body("lastname").notEmpty().isLength({ min: 1 }),
  body("email_user")
    .notEmpty()
    .isEmail()
    .isLength({ min: 3 })
    .withMessage("không được đểu trống và đúng trường Email"),
  body("password_user")
    .notEmpty()
    .isLength({ min: 6 })
    .isLength({ max: 12 })
    .withMessage("mật khẩu chứa 6-12 kí tự"),
];

const resultValidationUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
    });
  } else {
    next();
  }
};

const validateLogin = [
  body("email_user")
    .notEmpty()
    .isEmail()
    .isLength({ min: 3 })
    .withMessage("không được đểu trống và đúng trường Email"),
  body("password_user")
    .notEmpty()
    .isLength({ min: 6 })
    .isLength({ max: 12 })
    .withMessage("mật khẩu chứa 6-12 kí tự"),
];

const resultValidationLogin = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   
    return res.status(400).json({
      message: errors.array()[0].msg,
    });
  } else {
    next();
  }
};

module.exports = {
  validateUser: validateUser,
  resultValidationUser: resultValidationUser,
  validateLogin:validateLogin,
  resultValidationLogin:resultValidationLogin
};
