function findAll (callback) {
  setImmediate(function () {
    callback(null, [
      {id: 1, name: { first: "Robert", middle: "N", last: "Wimple" }}
    ])
  })
}

exports.findAll = findAll
