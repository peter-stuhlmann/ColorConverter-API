const express = require('express');
const app = express();
const port = 3112;
const convert = require('color-convert');

app.listen(port, () => console.log(`ColorConverter is running on port ${port}!`));