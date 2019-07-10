const express = require('express');
const app = express();
const port = 3112;
const routerConvert = require('./v1/converter/converter');
const logger = require('./v1/helpers/logger');

app.use(logger);

app.get('/', (req, res) => {
    res.redirect('https://github.com/peter-stuhlmann/ColorConverter-API');
});

app.use('/convert', routerConvert);

app.listen(port, () => console.log(`ColorConverter is running on port ${port}!`));