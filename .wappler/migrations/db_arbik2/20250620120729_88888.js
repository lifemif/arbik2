
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.renameColumn('username', 'login');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.renameColumn('login', 'username');
    })
};
