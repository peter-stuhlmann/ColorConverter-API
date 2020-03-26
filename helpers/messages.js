module.exports = errorHandler = (req, res, next) => {
  if (
    !req.query.cmyk &&
    !req.query.colorname &&
    !req.query.hex &&
    !req.query.hsl &&
    !req.query.rgb
  ) {
    res.status(400).send('Missing or wrong query parameter');
  } else {
    next();
  }
};
