
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('interested', function (table) {
    table.integer("skill_cards_id").index().references("id").inTable("skill_cards").onDelete("cascade").notNull()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('interested');
};
