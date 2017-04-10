var app = require('../test-app')
var test = require('tape')

test('GET /api/patients should send JSON list', function (assert) {
  app.get('/api/customers')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(assert.end)
})

test('POST /api/patients should send 201', function (assert) {
  app.post('/api/customers')
    .send({name: 'Barbara Doe'})
    .expect(201)
    .end(assert.end)
})
