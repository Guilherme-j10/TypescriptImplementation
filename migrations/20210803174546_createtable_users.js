exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('name_user', 255).notNullable();
    table.string('email_user', 255).notNullable();
    table.string('password_user', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
