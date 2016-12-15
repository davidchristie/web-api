
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    .onDelete('CASCADE')
    table.string('picture')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
