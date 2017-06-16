
exports.up = function(knex, Promise) {
return knex.schema.alterTable('skill_cards', function (table) {
    table.integer('interested_id').references('interested.id').onDelete('cascade');
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.alterTable('skill_cards', function (table) {
    table.dropcolumn('interested_id');
  })
};
