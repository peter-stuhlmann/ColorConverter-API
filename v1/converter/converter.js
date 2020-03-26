const express = require('express');
const router = express.Router();
const convert = require('color-convert');
const errorHandler = require('../../helpers/messages');

router.use(errorHandler);

router.get('/', (req, res) => {
  const queryString = req.query;
  const urlParams = new URLSearchParams(queryString);

  if (urlParams.has('hex')) {
    // HEX
    const hex = req.query.hex;

    // COLOR NAME
    const name = convert.hex.keyword(hex);

    const colornameValidator = convert.keyword.hex(name);
    var exact = true;
    if (colornameValidator.toLowerCase() != hex) {
      exact = false;
    }

    // RGB
    const [red, green, blue] = convert.hex.rgb(hex);

    // HSL
    const [hue, saturation, luminance] = convert.hex.hsl(hex);

    // HSV
    const value = convert.rgb.hsv(hex)[2];

    // CMYK
    const [c, m, y, k] = convert.hex.cmyk(hex);

    // Response
    return res.json({
      color: { name, exact },
      hex,
      hsl: { hue, saturation, luminance },
      hsv: { hue, saturation, value },
      rgb: { red, green, blue },
      cmyk: { c, m, y, k },
    });
  }

  if (urlParams.has('rgb')) {
    // RGB
    const rgb = req.query.rgb
      .split(',')
      .map(colorValue => parseInt(colorValue));
    const [red, green, blue] = rgb;

    // CMYK
    const [c, m, y, k] = convert.rgb.cmyk(rgb);

    // COLOR NAME
    const name = convert.rgb.keyword(rgb);

    const colornameValidator = convert.keyword.rgb(name);
    var exact = true;
    if (colornameValidator.toString() != rgb.toString()) {
      exact = false;
    }

    // HEX
    const hex = convert.rgb.hex(rgb);

    // HSL
    const [hue, saturation, luminance] = convert.rgb.hsl(rgb);

    // HSV
    const value = convert.rgb.hsv(rgb)[2];

    // Response
    return res.json({
      color: { name, exact },
      hex,
      hsl: { hue, saturation, luminance },
      hsv: { hue, saturation, value },
      rgb: { red, green, blue },
      cmyk: { c, m, y, k },
    });
  }

  if (urlParams.has('colorname')) {
    // COLOR NAME
    const name = req.query.colorname;

    // CMYK
    const [c, m, y, k] = convert.keyword.cmyk(name);

    // HEX
    const hex = convert.keyword.hex(name);

    // HSL
    const [hue, saturation, luminance] = convert.keyword.hsl(name);

    // HSV
    const value = convert.keyword.hsv(name)[2];

    // RGB
    const [red, green, blue] = convert.keyword.rgb(name);

    // Response
    return res.json({
      color: { name },
      hex,
      hsl: { hue, saturation, luminance },
      hsv: { hue, saturation, value },
      rgb: { red, green, blue },
      cmyk: { c, m, y, k },
    });
  }

  if (urlParams.has('hsl')) {
    // HSL
    const hsl = req.query.hsl
      .split(',')
      .map(colorValue => parseInt(colorValue));
    const [hue, saturation, luminance] = hsl;

    // CMYK
    const [c, m, y, k] = convert.hsl.cmyk(hsl);

    // COLOR NAME
    const name = convert.hsl.keyword(hsl);

    const colornameValidator = convert.keyword.hsl(name);
    var exact = true;
    if (colornameValidator.toString() != hsl.toString()) {
      exact = false;
    }

    // HEX
    const hex = convert.hsl.hex(hsl);

    // HSV
    const value = convert.hsl.hsv(hsl)[2];

    // RGB
    const [red, green, blue] = convert.hsl.rgb(hsl);

    // Response
    return res.json({
      color: { name, exact },
      hex,
      hsl: { hue, saturation, luminance },
      hsv: { hue, saturation, value },
      rgb: { red, green, blue },
      cmyk: { c, m, y, k },
    });
  }

  if (urlParams.has('cmyk')) {
    // CMYK
    const cmyk = req.query.cmyk
      .split(',')
      .map(colorValue => parseInt(colorValue));
    const [c, m, y, k] = cmyk;

    // COLOR NAME
    const name = convert.cmyk.keyword(cmyk);

    const colornameValidator = convert.keyword.cmyk(name);
    var exact = true;
    if (colornameValidator.toString() != cmyk.toString()) {
      exact = false;
    }

    // HEX
    const hex = convert.cmyk.hex(cmyk);

    // HSL
    const [hue, saturation, luminance] = convert.cmyk.hsl(cmyk);

    // HSV
    const value = convert.cmyk.hsv(cmyk)[2];

    // RGB
    const [red, green, blue] = convert.cmyk.rgb(cmyk);

    // Response
    return res.json({
      color: { name, exact },
      hex,
      hsl: { hue, saturation, luminance },
      hsv: { hue, saturation, value },
      rgb: { red, green, blue },
      cmyk: { c, m, y, k },
    });
  }

  if (urlParams.has('hsv')) {
    // HSV
    const hsv = req.query.hsv
      .split(',')
      .map(colorValue => parseInt(colorValue));
    const [hue, saturation, value] = hsv;

    // CMYK
    const [c, m, y, k] = convert.hsv.cmyk(hsv);

    // COLOR NAME
    const name = convert.hsv.keyword(hsv);

    const colornameValidator = convert.keyword.hsv(name);
    var exact = true;
    if (colornameValidator.toString() != hsv.toString()) {
      exact = false;
    }

    // HEX
    const hex = convert.hsv.hex(hsv);

    // HSL
    const [luminance] = convert.hsv.hsl(hsv);

    // RGB
    const [red, green, blue] = convert.hsv.rgb(hsv);

    // Response
    return res.json({
      color: { name, exact },
      hex,
      hsl: { hue, saturation, luminance },
      hsv: { hue, saturation, value },
      rgb: { red, green, blue },
      cmyk: { c, m, y, k },
    });
  }
});

module.exports = router;
