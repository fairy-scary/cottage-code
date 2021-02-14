var express = require('express');
var router = express.Router();

router.get(/^(?!\/?api).*/, (req, res) => {
  res.send('Hello World!');
});;


module.exports = router;