const express = require('express');
const router = express.Router();
const convert = require('color-convert');
const errorHandler = require('../../helpers/messages');

router.use(errorHandler);

router.get('/rgb', (req, res) => {
  // RGB
  const rgb = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const [red, green, blue] = rgb;

  // CMYK
  const [c, m, y, k] = convert.rgb.cmyk(rgb);

  // COLOR NAME
  const colorname = convert.rgb.keyword(rgb);

  // HEX
  const hex = convert.rgb.hex(rgb);

  // HSL
  const [hue, saturation, luminance] = convert.rgb.hsl(rgb);

  // Response
  return res.json({
    colorname,
    hex,
    hsl: { hue, saturation, luminance },
    rgb: { red, green, blue },
    cmyk: { c, m, y, k },
  });
});

router.get('/colorname', (req, res) => {
  // COLOR NAME
  const colorname = req.query.color;

  // CMYK
  const [c, m, y, k] = convert.keyword.cmyk(colorname);

  // HEX
  const hex = convert.keyword.hex(colorname);

  // HSL
  const [hue, saturation, luminance] = convert.keyword.hsl(colorname);

  // RGB
  const [red, green, blue] = convert.keyword.rgb(colorname);

  // Response
  return res.json({
    colorname,
    hex,
    hsl: { hue, saturation, luminance },
    rgb: { red, green, blue },
    cmyk: { c, m, y, k },
  });
});

router.get('/hex', (req, res) => {
  // HEX
  const hex = req.query.color;

  // COLOR NAME
  const colorname = convert.hex.keyword(hex);

  // RGB
  const [red, green, blue] = convert.hex.rgb(hex);

  // HSL
  const [hue, saturation, luminance] = convert.hex.hsl(hex);

  // CMYK
  const [c, m, y, k] = convert.hex.cmyk(hex);

  // Response
  return res.json({
    colorname,
    hex,
    hsl: { hue, saturation, luminance },
    rgb: { red, green, blue },
    cmyk: { c, m, y, k },
  });
});

router.get('/hsl', (req, res) => {
  // HSL
  const hsl = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const [hue, saturation, luminance] = hsl;

  // CMYK
  const [c, m, y, k] = convert.hsl.cmyk(hsl);

  // COLOR NAME
  const colorname = convert.hsl.keyword(hsl);

  // HEX
  const hex = convert.hsl.hex(hsl);

  // RGB
  const [red, green, blue] = convert.hsl.rgb(hsl);

  // Response
  return res.json({
    colorname,
    hex,
    hsl: { hue, saturation, luminance },
    rgb: { red, green, blue },
    cmyk: { c, m, y, k },
  });
});

router.get('/cmyk', (req, res) => {
  // CMYK
  const cmyk = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const [c, m, y, k] = cmyk;

  // COLOR NAME
  const colorname = convert.cmyk.keyword(cmyk);

  // HEX
  const hex = convert.cmyk.hex(cmyk);

  // HSL
  const [hue, saturation, luminance] = convert.cmyk.hsl(cmyk);

  // RGB
  const [red, green, blue] = convert.cmyk.rgb(cmyk);

  // Response
  return res.json({
    colorname,
    hex,
    hsl: { hue, saturation, luminance },
    rgb: { red, green, blue },
    cmyk: { c, m, y, k },
  });
});

// Each of the following requests returns only one value:

router.get('/rgb-to-hsl', (req, res) => {
  const rgbColor = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const colorOutput = convert.rgb.hsl(rgbColor);
  const [hue, saturation, luminance] = colorOutput;
  return res.json({ hue, saturation, luminance });
});

router.get('/hsl-to-rgb', (req, res) => {
  const hslColor = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const colorOutput = convert.hsl.rgb(hslColor);
  const [red, green, blue] = colorOutput;
  return res.json({ red, green, blue });
});

router.get('/colorname-to-rgb', (req, res) => {
  const colorOutput = convert.keyword.rgb(req.query.color);
  const [red, green, blue] = colorOutput;
  return res.json({ red, green, blue });
});

router.get('/rgb-to-colorname', (req, res) => {
  const colorname = convert.rgb.keyword(req.query.color);
  return res.json({ colorname });
});

router.get('/rgb-to-hex', (req, res) => {
  let rgbColor = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const hex = convert.rgb.hex(rgbColor);
  return res.json({ hex });
});

router.get('/hex-to-rgb', (req, res) => {
  const colorOutput = convert.hex.rgb(req.query.color);
  const [red, green, blue] = colorOutput;
  return res.json({ red, green, blue });
});

module.exports = router;
