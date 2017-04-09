var express = require('express')
var join = require('path').join

var router = new express.Router()

function home (req, res) {
  res.sendStatus(401);
}

router.use(express.static(join(__dirname, '../../wwwroot')))
router.get('/', home)

module.exports = router
