
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogs').insert({id: 1, user_id: 99901, title: '1st Blog', blog_text: 'asdfghjksdfghjkl'}),
        knex('blogs').insert({id: 2, user_id: 99902, title: 'Welcome', blog_text: 'asdfghjksdfghjkl'}),
        knex('blogs').insert({id: 3, user_id: 99902, title: 'About me', blog_text: 'asdfghjksdfghjkl'})
      ]);
    });
};
