function validateDisplayName(req, res, next) {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
}

function validateEmail(req, res, next) {
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  // exemplo de e-mail "lewishamilton@gmail.com"
  const { email } = req.body;
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
}

function validatePassword(req, res, next) {
  //  exemplo de senha 123456
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
}

module.exports = { validateDisplayName, validateEmail, validatePassword };