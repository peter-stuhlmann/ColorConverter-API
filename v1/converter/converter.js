const express = require('express');
const router = express.Router();
const convert = require('color-convert');
const errorHandler = require('../../helpers/messages');

router.use(errorHandler);

router.get('/rgb', (req, res) => {
    const rgbColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    
    // RGB
    const [red, green, blue] = rgbColor;

    // HSL
    const hslOutput = convert.rgb.hsl(rgbColor);
    const [hue, saturation, luminance] = hslOutput;
    
    // HEX
    const hexOutput = convert.rgb.hex(rgbColor);
    const hex = hexOutput;

    // COLOR NAME
    const colorname = convert.rgb.keyword(req.query.color);
    
    // Response
    return res.json(
        {   
            colorname,
            hex,
            hsl: { hue, saturation, luminance },
            rgb: { red, green, blue }        
        }
    );
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
    
    // Response
    return res.json(
        {   
            colorname,
            hex,
            hsl: { hue, saturation, luminance },
            rgb: { red, green, blue }        
        }
    );
});


// Each of the following requests returns only one value:

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

router.get('/rgb-to-colorname', (req, res) => {
    const colorname = convert.rgb.keyword(req.query.color);
    return res.json({ colorname });    
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
