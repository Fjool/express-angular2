function findAll (callback) {
  setImmediate(function () {
    callback(null, [
      {id: 1, name: 'Boring Dave'},
      {id: 2, name: 'Tedious Trevor'}
    ])
  })
}

exports.findAll = findAll
