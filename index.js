const express = require('express');
const app = express();
const port = 3112;
const convert = require('color-convert');

app.get('/convert/rgb-to-hsl', (req, res) => {
    let rgbColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    res.send(convert.rgb.hsl(rgbColor))
});

app.get('/convert/colorname-to-rgb', (req, res) => res.send(
    convert.keyword.rgb(req.query.color)
));

app.get('/convert/rgb-to-hex', (req, res) => {
    let rgbColor = req.query.color.split(',').map(colorValue => parseInt(colorValue));
    res.send(convert.rgb.hex(rgbColor))
});

app.listen(port, () => console.log(`ColorConverter is running on port ${port}!`));