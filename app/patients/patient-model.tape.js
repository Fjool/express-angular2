var test = require('tape')
var patient = require('./patient-model')

test('patient.findAll should return an array', function (assert) {
  patient.findAll(function (error, result) {
    assert.error(error)
    assert.ok(Array.isArray(result))
    assert.end()
  })
})
