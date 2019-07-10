const express = require('express');
const app = express();
const port = 3112;
const routerConvert = require('./converter/converter');

app.get('/', (req, res) => {
    res.redirect('https://github.com/peter-stuhlmann/ColorConverter-API');
});

app.use('/convert', routerConvert);

app.listen(port, () => console.log(`ColorConverter is running on port ${port}!`));