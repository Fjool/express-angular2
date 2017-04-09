var app = require('./test-app')
var test = require('tape')
var log = require('bole')('index.tape')

// what's the very first thing to test...
test("make sure maths isn\'t broken", function(assert) {
    assert.equal(1, 1)
    assert.pass("This too shall pass...")
    assert.end()
})

test('the app should 404 properly', function (assert) {
  app.get('/this-path-not-found').expect(404).end(assert.end)
})
