
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interested').del()
    .then(function () {
      // Inserts seed entries
      return knex('interested').insert([
        {id: 1, interested: 'Hey! I am interested in learning your skill!', user_id: 3, skill_cards_id: 5},
        {id: 2, interested: 'Cool! Are you available to connect about skill trading?', user_id: 1, skill_cards_id: 3},
        {id: 3, interested: 'This seems awesome... could we find a time to exchange skills?', user_id: 2, skill_cards_id: 7},
        {id: 4, interested: 'Man I have always wanted to learn this. Would you be up for a swap?', user_id: 2, skill_cards_id: 8},
      ]);
    });
};
