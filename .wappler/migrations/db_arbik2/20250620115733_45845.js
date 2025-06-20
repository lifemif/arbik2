
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.uuid('UUID').alter();
      table.binary('avatar');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('UUID', 255).alter();
      table.dropColumn('avatar');
    })
};
