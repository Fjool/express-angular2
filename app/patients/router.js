var patient = require('./patient-model')
var log = require('bole')('patients/router')
var router = require('express').Router()

function getPatients (req, res) {
  patient.findAll(function (error, patients) {
    if (error) {
      log.error(error, 'error finding patients')
      res.status(500).send(error)
      return
    }
    res.json(patients)
  })
}

function createPatient (req, res) {
  res.status(201).send()
}

router.post('/customers', createPatient )
router.get( '/customers',    getPatients)

module.exports = router
