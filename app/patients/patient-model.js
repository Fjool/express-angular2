function findAll (callback) {
  setImmediate(function () {
    callback(null, [
      {id: 1, name: 'Boring Dave'},
      {id: 2, name: 'Tedious Trevor'},
      {id: 3, name: 'Yawning Jan'},
      {id: 4, name: 'Beige Bernard'},
      {id: 5, name: 'Lazy Larry'}
    ])
  })
}

exports.findAll = findAll
