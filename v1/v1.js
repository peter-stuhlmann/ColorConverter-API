const express = require('express');
const router = express.Router();
const routerConvert = require('./converter/converter');

router.get('/', (req, res) => {
    res.redirect('https://github.com/peter-stuhlmann/ColorConverter-API');
});

router.get('/docs', (req, res) => {
    res.redirect('https://github.com/peter-stuhlmann/ColorConverter-API');
});

router.use('/convert', routerConvert);

module.exports = router