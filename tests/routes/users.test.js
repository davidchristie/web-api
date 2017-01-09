const test = require('ava')
const request = require('supertest')

const server = require('../../server')

test('first user returned by /user has correct name', t => {
  request(server)
    .get('/users')
    .end((err, res) => {
      t.ifError(err)
      t.is(res.body.users[0].name, 'Ambitious Aardvark')
    })
})

test('user returned by /user/99901 has correct name', t => {
  request(server)
    .get('/user/99901')
    .end((err, res) => {
      t.ifError(err)
      t.is(res.body.name, 'Ambitious Aardvark')
    })
})
