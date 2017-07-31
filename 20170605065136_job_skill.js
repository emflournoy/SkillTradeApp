exports.up = function(knex, Promise) {
  return knex.schema.createTable('job_skill',function(table){
    table.increments('id');
    table.integer('job_id').unsigned().index().references('job.id')
    table.integer('skill_id').unsigned().index().references('skill.id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('job_skill');
};
