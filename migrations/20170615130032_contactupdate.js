
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('skill_cards', function (table) {
      table.string('contact').defaultTo('');
      table.string('photo', 'char(1000)').defaultTo('').alter();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('skill_cards', function (table) {
      table.dropcolumn('contact');
  })
};
