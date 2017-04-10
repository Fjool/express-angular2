var express = require('express')
var path = require('path')
// var join = require('path').join
var log = require('bole')('main/router')

var router = new express.Router()
var public_path = path.join(__dirname, '../../', 'public')

function angular(req, res) {
  var index = path.resolve(path.join(public_path, 'index.html'))
  res.sendFile(index)
}

router.use(express.static(public_path));
router.get('/', angular)

module.exports = router
