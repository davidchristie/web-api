var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

function deleteUser (id, testDb) {
  var db = testDb || connection
  return db('users')
    .where('users.id', id)
    .delete()
}

function getUser (id, testDb) {
  var db = testDb || connection
  return db('users')
  .where('users.id', id)
  .first()
}

function getUsers (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('users').select()
}

function newUser (user, profile, testDb) {
  var db = testDb || connection
  return db('users')
    .insert(user)
    .then(ids => {
      var id = ids[0]
      profile.user_id = id
      db('profiles').insert(profile)
      return {id, name: user.name, email: user.email}
    })
}

function updateUser(user, testDb) {
  var db = testDb || connection
  return db('users')
    .where('id', user.id)
    .update({
      name: user.name,
      email: user.email
    })
}

module.exports = {
  deleteUser,
  getUser,
  getUsers,
  newUser,
  updateUser
}
