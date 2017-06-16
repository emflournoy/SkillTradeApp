exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('interested', (table)=> {
      table.increments('id');
      table.string('interested', 'char(1000)').notNullable().defaultTo('');
      table.integer('user_id').references('users.id').notNullable().onDelete('cascade');
      table.integer('skill_cards_id').references('skill_cards.id').notNullable().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('interested');
};
