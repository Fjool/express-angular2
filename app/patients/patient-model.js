function findAll (callback) {
  setImmediate(function () {
    callback(null, [
      {id: 1, name: 'Boring Dave'},
      {id: 2, name: 'Tedious Trevor'},
      {id: 3, name: 'Yawning Jan'}
    ])
  })
}

exports.findAll = findAll
