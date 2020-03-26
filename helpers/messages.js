module.exports = errorHandler = (req, res, next) => {
  if (!req.query.value) {
    res.status(400).send('Missing query parameter color');
  } else {
    next();
  }
};
