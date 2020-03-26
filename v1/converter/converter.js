const express = require('express');
const router = express.Router();
const convert = require('color-convert');
const errorHandler = require('../../helpers/messages');

router.use(errorHandler);

router.get('/rgb', (req, res) => {
  // RGB
  const rgbColor = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const [red, green, blue] = rgbColor;

  // HSL
  const hslOutput = convert.rgb.hsl(rgbColor);
  const [hue, saturation, luminance] = hslOutput;

  // HEX
  const hexOutput = convert.rgb.hex(rgbColor);
  const hex = hexOutput;

  // CMYK
  const cmyk = convert.rgb.cmyk(rgbColor);
  const [c, m, y, k] = cmyk;

  // COLOR NAME
  const colorname = convert.rgb.keyword(req.query.color);

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

  // RGB
  const rgbOutput = convert.keyword.rgb(colorname);
  const [red, green, blue] = rgbOutput;

  // HSL
  const hslOutput = convert.keyword.hsl(colorname);
  const [hue, saturation, luminance] = hslOutput;

  // HEX
  const hexOutput = convert.keyword.hex(colorname);
  const hex = hexOutput;

  // CMYK
  const cmyk = convert.rgb.cmyk(rgbOutput);
  const [c, m, y, k] = cmyk;

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
  const hexOutput = req.query.color;
  const hex = hexOutput;

  // COLOR NAME
  const colorname = convert.hex.keyword(hex);

  // RGB
  const rgbOutput = convert.hex.rgb(hex);
  const [red, green, blue] = rgbOutput;

  // HSL
  const hslOutput = convert.hex.hsl(hex);
  const [hue, saturation, luminance] = hslOutput;

  // CMYK
  const cmyk = convert.hex.cmyk(hex);
  const [c, m, y, k] = cmyk;

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
  const hslColor = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const [hue, saturation, luminance] = hslColor;

  // HEX
  const hexOutput = convert.hsl.hex(hslColor);
  const hex = hexOutput;

  // COLOR NAME
  const colorname = convert.hex.keyword(hex);

  // RGB
  const rgbColor = convert.hsl.rgb(hslColor);
  const [red, green, blue] = rgbColor;

  // CMYK
  const cmyk = convert.hex.cmyk(hex);
  const [c, m, y, k] = cmyk;

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
  const cmykColor = req.query.color
    .split(',')
    .map(colorValue => parseInt(colorValue));
  const [c, m, y, k] = cmykColor;

  // HSL
  const hslColor = convert.cmyk.hsl(cmykColor);
  const [hue, saturation, luminance] = hslColor;

  // HEX
  const hexOutput = convert.hsl.hex(hslColor);
  const hex = hexOutput;

  // COLOR NAME
  const colorname = convert.hex.keyword(hex);

  // RGB
  const rgbColor = convert.hsl.rgb(hslColor);
  const [red, green, blue] = rgbColor;

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
