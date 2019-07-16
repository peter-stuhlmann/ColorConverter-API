const express = require('express');
const router = express.Router();
const convert = require('color-convert');
const errorHandler = require('../../helpers/messages');

router.use(errorHandler);

router.get('/rgb-to-hsl', (req, res) => {
    const rgbColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    const colorOutput = convert.rgb.hsl(rgbColor);
    const [hue, saturation, luminance] = colorOutput;
    return res.json({ hue, saturation, luminance });
});

router.get('/hsl-to-rgb', (req, res) => {
    const hslColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    const colorOutput = convert.hsl.rgb(hslColor);
    const [red, green, blue] = colorOutput;
    return res.json({ red, green, blue });
});

router.get('/colorname-to-rgb', (req, res) => {
    const colorOutput = convert.keyword.rgb(req.query.color);
    const [red, green, blue] = colorOutput;
    return res.json({ red, green, blue });    
});

router.get('/rgb-to-hex', (req, res) => {
    let rgbColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    const hex = convert.rgb.hex(rgbColor);
    return res.json({ hex })
});

router.get('/hex-to-rgb', (req, res) => {
    const colorOutput = convert.hex.rgb(req.query.color);
    const [red, green, blue] = colorOutput;
    return res.json({ red, green, blue })
});

module.exports = router
