
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interested').del()
    .then(function () {
      // Inserts seed entries
      return knex('interested').insert([
        {id: 1, interested: 'Hey! I am interested in learning your skill!'},
        {id: 2, interested: 'Cool! Are you available to connect about skill trading?'},
        {id: 3, interested: 'This seems awesome... could we find a time to exchange skills?'},
        {id: 4, interested: 'Man I have always wanted to learn this. Would you be up for a swap?'},
      ]);
    });
};
