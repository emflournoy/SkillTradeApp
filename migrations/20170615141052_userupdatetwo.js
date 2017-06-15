

  exports.up = function(knex, Promise) {
  return   knex.schema.alterTable('users', function (table) {
      table.string('email').notNullable().defaultTo('').alter();
    })

  };


exports.down = function(knex, Promise) {
  return knex.schema.alterTable('users', function (table) {
    table.string('email').notNullable().unique().alter();
  })
};
