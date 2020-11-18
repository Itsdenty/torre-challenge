const Validator = {};

Validator.get = (req, res, next) => {
  req.checkBody('email', 'Please enter a valid email').not().isEmpty().isEmail()
    .isLength({ min: 5 })
    .isLength({ max: 50 })
    .normalizeEmail()
    .trim();
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(
      errors,
    ));
};

export default Validator;
