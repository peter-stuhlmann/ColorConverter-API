const express = require('express');
const app = express();
const port = 3112;
const routerV1 = require('./v1/v1');
const logger = require('./helpers/logger');

app.use(logger);

app.get('/', (req, res) => {
    res.redirect('/v1');
});

app.use('/v1', routerV1);

app.listen(port, () => console.log(`ColorConverter is running on port ${port}!`));