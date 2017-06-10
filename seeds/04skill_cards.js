
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skill_cards').del()
    .then(()=> {
      return knex('skill_cards').insert([
        {id: 1, title: 'cuddeling', description: 'I will cuddle the cuddles out of you',  photo: 'mcDuffie@gmail.com', user_id: 9, categories_id: 6, environment_id: 5},
        {id: 2, title: 'dancing', description: 'like a baller',  photo: 'mcDuffie@gmail.com', user_id: 4},
        {id: 3, title: 'LED lighting', description: 'like, cool colors and stuff',  photo: 'mcDuffie@gmail.com', user_id: 4},
        {id: 4, title: 'knots', description: 'tying them. and untying them.',  photo: 'mcDuffie@gmail.com', user_id: 1},
        {id: 5, title: 'Being annoying', description: 'town fool',  photo: 'mcDuffie@gmail.com', user_id: 2},
        {id: 6, title: 'Yogging', description: 'with a hard Y',  photo: 'mcDuffie@gmail.com', user_id: 3},
        {id: 7, title: 'chewbacca', description: 'brown, shaggy excellence',  photo: 'mcDuffie@gmail.com', user_id: 5},
        {id: 8, title: 'eating lots of food', description: 'like, all the time',  photo: 'mcDuffie@gmail.com', user_id: 6},
        {id: 9, title: 'tug-of-war', description: 'champion',  photo: 'mcDuffie@gmail.com', user_id: 7},
        {id: 10, title: 'extreme positivity', description: 'amongst other things',  photo: 'mcDuffie@gmail.com', user_id: 10}
      ]);
    })
    .then(function(){
    return knex.raw("SELECT setval('skill_cards_id_seq', (SELECT MAX(id) FROM skill_cards))");
  });
};
