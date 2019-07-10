const express = require('express');
const router = express.Router();
const convert = require('color-convert');
const errorHandler = require('../messages');

router.use(errorHandler);

router.get('/rgb-to-hsl', (req, res, next) => {
    let rgbColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    res.send(convert.rgb.hsl(rgbColor))
    next()
});

router.get('/colorname-to-rgb', (req, res, next) => {
    res.send(convert.keyword.rgb(req.query.color))
    next()
});

router.get('/rgb-to-hex', (req, res, next) => {
    let rgbColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    res.send(convert.rgb.hex(rgbColor))
    next()
});

router.get('/hex-to-rgb', (req, res, next) => {
    res.send(convert.hex.rgb(req.query.color))
    next()
});

module.exports = router
