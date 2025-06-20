
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('id');
      table.string('UUID');
      table.string('email');
      table.string('telefon');
      table.string('login');
      table.string('password');
      table.string('role');
      table.string('status');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
};
