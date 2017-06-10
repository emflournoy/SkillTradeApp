
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('skill_cards', (table)=> {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.string('photo').defaultTo('');
    table.integer('user_id').references('users.id').notNullable().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('skill_cards');
};
