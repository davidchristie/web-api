var express = require('express')

var router = express.Router()
var db = require('../db')

router.delete('/:id', (req, res) => {
  db.deleteUser(req.body.id)
    .then(() => res.status(204).send())
})

router.get('/', (req, res) => {
  db.getUsers()
    .then(function (users) {
      res.json({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  db.getUser(req.params.id)
    .then(user => res.json(user))
    .catch(function (err) {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  var user = {
    name: req.body.name,
    email: req.body.email
  }
  var profile = {
    picture: req.body.picture
  }
  db.newUser(user, profile)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(function (err) {
      res.status(500).send(err.message)
    })
})

router.put('/', (req, res) => {
  db.updateUser({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
  })
    .then(() => {
      res.status(204).send()
    })
    .catch(function (err) {
      res.status(500).send(err.message)
    })
})

module.exports = router
