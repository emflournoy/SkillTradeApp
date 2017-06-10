
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, type: 'Literature'},
        {id: 2, type: 'Animals'},
        {id: 3, type: 'Dance'},
        {id: 4, type: 'Communication'},
        {id: 5, type: 'Sports'},
        {id: 6, type: 'Therapeutic'},
        {id: 7, type: 'Electronics/Mechanics/Engineering'},
        {id: 8, type: 'Survival'},
        {id: 9, type: 'Art'},
        {id: 10, type: 'Games'},
        {id: 11, type: 'Food/Beverage'},
        {id: 12, type: 'Science-Fiction/Fantasy'},
        {id: 13, type: 'Science'},
        {id: 14, type: 'Lifestyle'},
        {id: 15, type: 'Cultural'},
        {id: 16, type: 'Music'},
        {id: 17, type: 'Computers'},
        {id: 18, type: 'Gaming'},
        {id: 19, type: 'Drinks'},
        {id: 20, type: 'Fashion'},
        {id: 21, type: 'Health'},
        {id: 22, type: 'Automobiles'}
      ]);
    })
    .then(function(){
    return knex.raw("SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories))");
  });
};
