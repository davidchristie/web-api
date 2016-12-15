var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser,
  //getBlogs: getBlogs
}

function getUsers (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('users').select()
}

function getUser (name, testDb) {
  var db = testDb || connection
  return db('users')
  .join('profiles', 'users.id', '=', 'profiles.user_id')
  .join("blogs", "users.id", "=", "blogs.user_id")
  .select('users.name', 'users.email', 'profiles.picture as picture', "blogs.title as title", "blogs.blog_text as text")
  .where('users.name', name)
}

function newUser (user, profile, testDb) {
  var db = testDb || connection
  return Promise.all([
    db('users').insert(user),
    db('profiles').insert(profile)
  ])
}

// function getBlogs(user, testDb){
//   var db = testDb || connection
//   return db("users")
//   .join("blogs", "users.id", "=", "blogs.user_id")
//   .select("users.name", "blogs.title as title", "blogs.blog_text as text")
//   .where("users.name", user)
// }
