
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('environment', (table)=>{
    table.increments();
    table.string('type').notNullable().defaultTo('');
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('environment');
};
