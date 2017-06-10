
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('environment').del()
    .then(function () {
      // Inserts seed entries
      return knex('environment').insert([
        {id: 1, type: 'Water(In)'},
        {id: 2, type: 'Water(On)'},
        {id: 3, type: 'Indoor(sport)'},
        {id: 4, type: 'Indoor(artisan)'},
        {id: 5, type: 'Indoor(social)'},
        {id: 6, type: 'Outdoor(sport)'},
        {id: 7, type: 'Outdoor(artisan)'},
        {id: 8, type: 'Outdoor(social)'}
      ]);
    })
    .then(function(){
    return knex.raw("SELECT setval('environment_id_seq', (SELECT MAX(id) FROM environment))");
  });
};
