function findAll (callback) {
  setImmediate(function () {
    callback(null, [
      {id: 1, name: 'Boring Dave'},
      {id: 2, name: 'Tedious Trevor'},
      {id: 3, name: 'Yawning Jan'},
      {id: 4, name: 'Beige Bernard'},
      {id: 5, name: 'Lazy Larry'},
      {id: 6, name: 'Immobile Ian'},
      {id: 7, name: 'Uninspiring Ursula'},
      {id: 8, name: 'Morose Michael'},
      {id: 9, name: 'Endless Erin'}
    ])
  })
}

exports.findAll = findAll
