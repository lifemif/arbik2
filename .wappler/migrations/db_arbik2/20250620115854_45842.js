
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('UUID', 36).alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.uuid('UUID', 36).alter();
    })
};
