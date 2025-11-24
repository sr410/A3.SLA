var express = require('express');
var router = express.Router();

/* Homepage */
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

/* Home page (same as /) */
router.get('/home', (req, res) => {
  res.render('index', { title: 'Home' });
});

/* Shopping List page */
router.get('/list', (req, res) => {
  res.render('list', { title: 'List' });
});

/* Info page */
router.get('/info', (req, res) => {
  res.render('info', { title: 'Info' });
});

module.exports = router;
