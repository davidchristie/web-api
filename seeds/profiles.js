
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('profiles').insert({id: 1, user_id: 99901, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 2, user_id: 99902, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 3, user_id: 99903, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 4, user_id: 99904, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 5, user_id: 99905, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 6, user_id: 99906, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 7, user_id: 99907, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 8, user_id: 99908, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 9, user_id: 99909, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 10, user_id: 99910, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 11, user_id: 99911, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 12, user_id: 99912, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 13, user_id: 99913, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 14, user_id: 99914, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 15, user_id: 99915, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 16, user_id: 99916, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 17, user_id: 99917, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 18, user_id: 99918, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 19, user_id: 99919, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 20, user_id: 99920, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 21, user_id: 99921, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 22, user_id: 99922, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 23, user_id: 99923, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 24, user_id: 99924, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 25, user_id: 99925, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
        knex('profiles').insert({id: 26, user_id: 99926, picture: 'https://s-media-cache-ak0.pinimg.com/736x/f0/26/05/f0260599e1251c67eefca31c02a19a81.jpg'}),
      ]);
    });
};
