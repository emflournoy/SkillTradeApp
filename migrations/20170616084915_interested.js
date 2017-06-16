exports.up = function(knex, Promise) {
  .createTable('interested', (table)=> {
      table.increments('id');
      table.string('interested', char(1000)).notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('interested');
};
