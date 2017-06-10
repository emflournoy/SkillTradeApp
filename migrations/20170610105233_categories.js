
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('categories', (table)=>{
    table.increments();
    table.string('type').notNullable().defaultTo('');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('categories');
};
