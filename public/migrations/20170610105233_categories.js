
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('categories', (table)=>{
    table.increments();
    table.string('type').notNullable().defaultTo('');
    table.integer('skill_cards_id').references('skill_cards.id').notNullable().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('categories');
};
